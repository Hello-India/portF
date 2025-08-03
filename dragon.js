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
let radm = 0;
let frm = Math.random();
let rad = 0;

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
  
  // Initialize dragon elements
  for (let i = 0; i < N; i++) {
    elems[i] = { use: null, x: width / 2, y: height / 2 };
  }
  
  // Set initial pointer position
  pointer.x = width / 2;
  pointer.y = height / 2;
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
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

function handlePointerMove(e) {
  lastMoveTime = Date.now();
  isMouseInWindow = true;
  
  pointer.x = e.clientX;
  pointer.y = e.clientY;
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
  e.x += (ax + pointer.x - e.x) / 10;
  e.y += (ay + pointer.y - e.y) / 10;
  
  for (let i = 1; i < N; i++) {
    let e = elems[i];
    let ep = elems[i - 1];
    const a = Math.atan2(e.y - ep.y, e.x - ep.x);
    e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
    e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;
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
    pointer.x += (width / 2 - pointer.x) * 0.05;
    pointer.y += (height / 2 - pointer.y) * 0.05;
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

// Periodic check to ensure dragon comes back
setInterval(() => {
  if (window.innerWidth > 768 && isMouseInWindow && !isVisible) {
    // Check if enough time has passed since last hide
    if (Date.now() - lastMoveTime < 3000) {
      showDragon();
    }
  }
}, 2000);
