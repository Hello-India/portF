// Premium Dragon Cursor Logic
let dragonCursor;
let lastMoveTime = Date.now();
let hideTimeout;
let isVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  dragonCursor = document.getElementById('dragonCursor');
  
  // Only initialize on desktop
  if (window.innerWidth > 768) {
    initDragonCursor();
  }
});

function initDragonCursor() {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseenter', showDragon);
  document.addEventListener('mouseleave', hideDragon);
}

function handleMouseMove(e) {
  if (!dragonCursor) return;
  
  lastMoveTime = Date.now();
  
  // Update dragon position
  dragonCursor.style.left = e.clientX + 'px';
  dragonCursor.style.top = e.clientY + 'px';
  
  // Show dragon if hidden
  if (!isVisible) {
    showDragon();
  }
  
  // Clear existing timeout
  clearTimeout(hideTimeout);
  
  // Set new timeout to hide dragon after 4 seconds of inactivity
  hideTimeout = setTimeout(() => {
    if (Date.now() - lastMoveTime >= 4000) {
      hideDragon();
    }
  }, 4000);
}

function showDragon() {
  if (!dragonCursor) return;
  
  isVisible = true;
  dragonCursor.classList.add('visible');
  dragonCursor.classList.remove('hiding');
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
  }, 300);
}

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    if (dragonCursor) {
      hideDragon();
    }
  } else if (window.innerWidth > 768 && !isVisible) {
    initDragonCursor();
  }
});
