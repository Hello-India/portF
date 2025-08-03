// Enhanced Interactive Dragon Cursor Logic
let dragonCursor;
let lastMoveTime = Date.now();
let hideTimeout;
let isVisible = false;
let lastMouseX = 0;
let lastMouseY = 0;
let isMouseInWindow = true;

document.addEventListener('DOMContentLoaded', () => {
  dragonCursor = document.getElementById('dragonCursor');
  
  // Only initialize on desktop
  if (window.innerWidth > 768) {
    initDragonCursor();
  }
});

function initDragonCursor() {
  // Mouse movement tracking
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mouseleave', handleMouseLeave);
  
  // Window focus events for better return functionality
  window.addEventListener('focus', handleWindowFocus);
  window.addEventListener('blur', handleWindowBlur);
  
  // Visibility change for tab switching
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

function handleMouseMove(e) {
  if (!dragonCursor) return;
  
  lastMoveTime = Date.now();
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  isMouseInWindow = true;
  
  // Update dragon position with smooth following
  updateDragonPosition(e.clientX, e.clientY);
  
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

function handleMouseEnter(e) {
  isMouseInWindow = true;
  if (e.clientX && e.clientY) {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    updateDragonPosition(e.clientX, e.clientY);
    showDragon();
  }
}

function handleMouseLeave() {
  isMouseInWindow = false;
  // Don't hide immediately, wait a bit in case mouse comes back
  setTimeout(() => {
    if (!isMouseInWindow) {
      hideDragon();
    }
  }, 1000);
}

function handleWindowFocus() {
  // When window gets focus, check if we should show dragon
  if (isMouseInWindow && lastMouseX && lastMouseY) {
    setTimeout(() => {
      updateDragonPosition(lastMouseX, lastMouseY);
      showDragon();
    }, 100);
  }
}

function handleWindowBlur() {
  // Hide dragon when window loses focus
  hideDragon();
}

function handleVisibilityChange() {
  if (document.hidden) {
    hideDragon();
  } else {
    // Page became visible again
    setTimeout(() => {
      if (isMouseInWindow && lastMouseX && lastMouseY) {
        updateDragonPosition(lastMouseX, lastMouseY);
        showDragon();
      }
    }, 200);
  }
}

function updateDragonPosition(x, y) {
  if (!dragonCursor) return;
  
  // Smooth position update with easing
  dragonCursor.style.left = x + 'px';
  dragonCursor.style.top = y + 'px';
  
  // Add rotation based on movement direction
  const deltaX = x - (parseFloat(dragonCursor.style.left) || 0);
  const deltaY = y - (parseFloat(dragonCursor.style.top) || 0);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  
  // Apply subtle rotation to dragon body
  const dragonBody = dragonCursor.querySelector('.dragon-body');
  if (dragonBody) {
    dragonBody.style.transform = `rotate(${angle * 0.1}deg)`;
  }
}

function showDragon() {
  if (!dragonCursor) return;
  
  isVisible = true;
  dragonCursor.classList.add('visible');
  dragonCursor.classList.remove('hiding');
  dragonCursor.style.opacity = '1';
}

function hideDragon() {
  if (!dragonCursor) return;
  
  isVisible = false;
  dragonCursor.classList.add('hiding');
  dragonCursor.classList.remove('visible');
  
  // Completely hide after animation
  setTimeout(() => {
    if (!isVisible) {
      dragonCursor.style.opacity = '0';
    }
  }, 600);
}

// Enhanced window resize handling
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    if (dragonCursor) {
      hideDragon();
    }
  } else if (window.innerWidth > 768) {
    if (!dragonCursor) {
      dragonCursor = document.getElementById('dragonCursor');
    }
    initDragonCursor();
    
    // Show dragon if mouse is in window
    if (isMouseInWindow && lastMouseX && lastMouseY) {
      setTimeout(() => {
        updateDragonPosition(lastMouseX, lastMouseY);
        showDragon();
      }, 300);
    }
  }
});

// Periodic check to ensure dragon comes back
setInterval(() => {
  if (window.innerWidth > 768 && isMouseInWindow && !isVisible && lastMouseX && lastMouseY) {
    // Check if enough time has passed since last hide
    if (Date.now() - lastMoveTime < 3000) {
      showDragon();
      updateDragonPosition(lastMouseX, lastMouseY);
    }
  }
}, 2000);
