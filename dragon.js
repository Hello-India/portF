"use strict";

// DragoF Interactive Dragon Cursor Implementation
let dragofContainer;
let dragonScreen;
let xmlns = "http://www.w3.org/2000/svg";
let xlinkns = "http://www.w3.org/1999/xlink";
let width, height;
let isVisible = false;
let lastMoveTime = Date.now();
let hideTimeout;
let isMouseInWindow = true;

// Dragon configuration
const N = 40; // Number of dragon segments
const elems = [];
const pointer = { x: 0, y: 0 };
const targetPointer = { x: 0, y: 0 }; // Where dragon wants to go
let radm = 0;
let frm = Math.random();
let rad = 0;

// Collision detection
let contentBoxes = [];
let lastBoxUpdate = 0;

document.addEventListener('DOMContentLoaded', () => {
  dragofContainer = document.getElementById('dragofContainer');
  dragonScreen = document.getElementById('dragonScreen');
  
  // Only initialize on desktop
  if (window.innerWidth > 768) {
    initDragofDragon();
  }
});

function initDragofDragon() {
  resize();
  
  // Initialize content box detection
  updateContentBoxes();
  lastBoxUpdate = Date.now();
  
  // Find a safe starting position
  const safeStart = findSafePosition(width / 2, height / 2);
  
  // Initialize dragon elements
  for (let i = 0; i < N; i++) {
    elems[i] = { use: null, x: safeStart.x, y: safeStart.y };
  }
  
  // Set initial pointer position
  pointer.x = safeStart.x;
  pointer.y = safeStart.y;
  targetPointer.x = safeStart.x;
  targetPointer.y = safeStart.y;
  radm = Math.min(width, height) / 4 - 20;
  
  // Create dragon segments
  for (let i = 1; i < N; i++) {
    if (i === 1) prepend("Cabeza", i); // Head
    else if (i === 8 || i === 14) prepend("Aletas", i); // Wings
    else prepend("Espina", i); // Body segments
  }
  
  // Event listeners
  setupEventListeners();
  
  // Start animation
  run();
}

function setupEventListeners() {
  window.addEventListener("pointermove", handlePointerMove, false);
  window.addEventListener("mousemove", handlePointerMove, false);
  window.addEventListener("resize", handleResize, false);
  window.addEventListener('focus', handleWindowFocus);
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('scroll', handleScroll, false);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

function handleScroll() {
  // Update content boxes when scrolling since positions change
  updateContentBoxes();
}

function handlePointerMove(e) {
  lastMoveTime = Date.now();
  isMouseInWindow = true;
  
  // Update target position (where we want to go)
  targetPointer.x = e.clientX;
  targetPointer.y = e.clientY;
  
  // Update content boxes periodically for performance
  if (Date.now() - lastBoxUpdate > 1000) {
    updateContentBoxes();
    lastBoxUpdate = Date.now();
  }
  
  // Calculate safe position avoiding content
  const safePosition = findSafePosition(targetPointer.x, targetPointer.y);
  pointer.x = safePosition.x;
  pointer.y = safePosition.y;
  
  rad = 0;
  
  // Show dragon if hidden
  if (!isVisible) {
    showDragon();
  }
  
  // Clear existing timeout
  clearTimeout(hideTimeout);
  
  // Set new timeout to hide dragon after 5 seconds of inactivity
  hideTimeout = setTimeout(() => {
    if (Date.now() - lastMoveTime >= 5000) {
      hideDragon();
    }
  }, 5000);
}

function handleMouseEnter() {
  isMouseInWindow = true;
  if (!isVisible) {
    showDragon();
  }
}

function handleMouseLeave() {
  isMouseInWindow = false;
  setTimeout(() => {
    if (!isMouseInWindow) {
      hideDragon();
    }
  }, 1000);
}

function handleWindowFocus() {
  if (isMouseInWindow) {
    setTimeout(() => {
      showDragon();
    }, 100);
  }
}

function handleWindowBlur() {
  hideDragon();
}

function handleVisibilityChange() {
  if (document.hidden) {
    hideDragon();
  } else {
    setTimeout(() => {
      if (isMouseInWindow) {
        showDragon();
      }
    }, 200);
  }
}

function handleResize() {
  resize();
  radm = Math.min(width, height) / 4 - 20;
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
}

function prepend(use, i) {
  const elem = document.createElementNS(xmlns, "use");
  elems[i].use = elem;
  elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
  dragonScreen.prepend(elem);
}

function showDragon() {
  if (!dragofContainer) return;
  
  isVisible = true;
  dragofContainer.classList.add('visible');
  dragofContainer.classList.remove('hiding');
}

function hideDragon() {
  if (!dragofContainer) return;
  
  isVisible = false;
  dragofContainer.classList.add('hiding');
  dragofContainer.classList.remove('visible');
}

const run = () => {
  requestAnimationFrame(run);
  
  if (!isVisible) return;
  
  let e = elems[0];
  const ax = (Math.cos(3 * frm) * rad * width) / height;
  const ay = (Math.sin(4 * frm) * rad * height) / width;
  
  // Smoothly move towards the safe position
  e.x += (ax + pointer.x - e.x) / 15; // Slower movement for smoother avoidance
  e.y += (ay + pointer.y - e.y) / 15;
  
  for (let i = 1; i < N; i++) {
    let e = elems[i];
    let ep = elems[i - 1];
    const a = Math.atan2(e.y - ep.y, e.x - ep.x);
    
    // Calculate next position
    let nextX = ep.x - e.x + (Math.cos(a) * (100 - i)) / 5;
    let nextY = ep.y - e.y + (Math.sin(a) * (100 - i)) / 5;
    
    // Check if this segment would collide and adjust
    const segmentSafePos = findSafePositionForSegment(
      e.x + nextX / 4, 
      e.y + nextY / 4, 
      (162 + 4 * (1 - i)) / 50 * 30 // segment size
    );
    
    e.x += (segmentSafePos.x - e.x) / 4;
    e.y += (segmentSafePos.y - e.y) / 4;
    
    const s = (162 + 4 * (1 - i)) / 50;
    
    if (e.use) {
      e.use.setAttributeNS(
        null,
        "transform",
        `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
          (180 / Math.PI) * a
        }) translate(${0},${0}) scale(${s},${s})`
      );
    }
  }
  
  if (rad < radm) rad++;
  frm += 0.003;
  
  if (rad > 60) {
    // When idle, find a safe position to rest
    const safeCenterPosition = findSafePosition(width / 2, height / 2);
    pointer.x += (safeCenterPosition.x - pointer.x) * 0.02;
    pointer.y += (safeCenterPosition.y - pointer.y) * 0.02;
  }
};

// Enhanced window resize handling
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    if (dragofContainer) {
      hideDragon();
    }
  } else if (window.innerWidth > 768) {
    if (!dragofContainer) {
      dragofContainer = document.getElementById('dragofContainer');
      dragonScreen = document.getElementById('dragonScreen');
    }
    initDragofDragon();
    
    // Show dragon if mouse is in window
    if (isMouseInWindow) {
      setTimeout(() => {
        showDragon();
      }, 300);
    }
  }
});

// Content box detection and avoidance functions
function updateContentBoxes() {
  contentBoxes = [];
  
  // Get all content sections
  const sections = [
    '.about-section',
    '.projects-section',
    '.studies-section', 
    '.experience-section',
    '.support-section',
    '.contact-section',
    '.greeting-card',
    '.project-card',
    '.study-box',
    '.experience-box'
  ];
  
  sections.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        contentBoxes.push({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2
        });
      }
    });
  });
}

function isPointInBox(x, y, box, padding = 50) {
  return x >= box.x - padding && 
         x <= box.x + box.width + padding && 
         y >= box.y - padding && 
         y <= box.y + box.height + padding;
}

function findSafePosition(targetX, targetY) {
  // Check if target position is safe
  const isTargetSafe = !contentBoxes.some(box => isPointInBox(targetX, targetY, box));
  
  if (isTargetSafe) {
    return { x: targetX, y: targetY };
  }
  
  // Find the nearest safe position
  let bestPosition = { x: targetX, y: targetY };
  let bestDistance = Infinity;
  
  // Try positions around the target in a spiral pattern
  const maxRadius = 200;
  const step = 20;
  
  for (let radius = step; radius <= maxRadius; radius += step) {
    const numPoints = Math.max(8, Math.floor(radius / 5));
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const testX = targetX + Math.cos(angle) * radius;
      const testY = targetY + Math.sin(angle) * radius;
      
      // Check bounds
      if (testX < 50 || testX > width - 50 || testY < 50 || testY > height - 50) {
        continue;
      }
      
      // Check if this position is safe
      const isSafe = !contentBoxes.some(box => isPointInBox(testX, testY, box));
      
      if (isSafe) {
        const distance = Math.sqrt((testX - targetX) ** 2 + (testY - targetY) ** 2);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestPosition = { x: testX, y: testY };
        }
      }
    }
    
    // If we found a good position, break early
    if (bestDistance < radius) {
      break;
    }
  }
  
  return bestPosition;
}

function findSafePositionForSegment(targetX, targetY, segmentSize) {
  // For segments, use a smaller avoidance radius
  const padding = 30 + segmentSize;
  
  const isTargetSafe = !contentBoxes.some(box => isPointInBox(targetX, targetY, box, padding));
  
  if (isTargetSafe) {
    return { x: targetX, y: targetY };
  }
  
  // Try to find a nearby safe position
  const searchRadius = 100;
  const numDirections = 8;
  
  for (let i = 0; i < numDirections; i++) {
    const angle = (i / numDirections) * Math.PI * 2;
    const testX = targetX + Math.cos(angle) * searchRadius;
    const testY = targetY + Math.sin(angle) * searchRadius;
    
    // Check bounds
    if (testX < 50 || testX > width - 50 || testY < 50 || testY > height - 50) {
      continue;
    }
    
    const isSafe = !contentBoxes.some(box => isPointInBox(testX, testY, box, padding));
    
    if (isSafe) {
      return { x: testX, y: testY };
    }
  }
  
  // If no safe position found, return the target (segment will handle it)
  return { x: targetX, y: targetY };
}

// Periodic check to ensure dragon comes back
setInterval(() => {
  if (window.innerWidth > 768 && isMouseInWindow && !isVisible) {
    // Check if enough time has passed since last hide
    if (Date.now() - lastMoveTime < 3000) {
      showDragon();
    }
  }
}, 2000);
