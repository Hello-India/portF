// Reset scroll position on page load/refresh
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Additional scroll reset for better compatibility
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", () => {
  // Force scroll to top on page load
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
 // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const overlayMenu = document.getElementById('overlay-menu');

  menuToggle.addEventListener('click', () => {
    const isVisible = overlayMenu.classList.toggle('visible');
    overlayMenu.classList.toggle('hidden', !isVisible);
    menuToggle.setAttribute('aria-expanded', isVisible);
  });

  // Close menu when clicking any menu link (optional for better UX)
  overlayMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlayMenu.classList.remove('visible');
      overlayMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });

  // Scroll down button smooth scroll
  const scrollBtn = document.getElementById("scroll-down-btn");
  scrollBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // About Image toggle blur on click
  const aboutSection = document.getElementById("about");
  const aboutImageWrapper = aboutSection.querySelector(".about-image-wr");
  const overlay = aboutImageWrapper.querySelector(".image-overlay");
  const image = aboutImageWrapper.querySelector("img");

  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");       // Hide overlay
    image.classList.add("clear");          // Unblur image
  });

  // Reset image blur when clicking outside or scrolling away
  document.addEventListener("click", (e) => {
    if (!aboutImageWrapper.contains(e.target)) {
      overlay.classList.remove("hidden");
      image.classList.remove("clear");
    }
  });


  // About section fade slide up on scroll
  const aboutText = aboutSection.querySelector(".about-text");
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
        // Also reset image blur and overlay if scrolled up
        overlay.classList.remove("hidden");
        image.classList.remove("clear");
      }
    });
  }, {
    threshold: 0.5
  });
  aboutObserver.observe(aboutSection);

  // Projects Zoom in/out on scroll faster
  const projects = document.querySelectorAll(".project-card");
  const projObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("open");
        entry.target.classList.remove("closed");
      } else {
        entry.target.classList.remove("open");
        entry.target.classList.add("closed");
      }
    });
  }, { threshold: 0.4 });
  projects.forEach(p => projObserver.observe(p));

  // Studies sliding left and right with visibility toggle faster
  const studiesSection = document.getElementById("studies");
  const leftBox = studiesSection.querySelector(".left-box");
  const rightBox = studiesSection.querySelector(".right-box");
  const studiesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        leftBox.classList.add("visible");
        rightBox.classList.add("visible");
      } else {
        leftBox.classList.remove("visible");
        rightBox.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });
  studiesObserver.observe(studiesSection);

  // Experience circular open close faster
  const experiences = document.querySelectorAll(".experience-box");
  const expObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {threshold: 0.3});
  experiences.forEach(exp => expObserver.observe(exp));

  // Support section slide in/out left faster
  const supportSection = document.getElementById("support");
  const supportObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) supportSection.classList.add("visible");
      else supportSection.classList.remove("visible");
    });
  }, {threshold: 0.3});
  supportObserver.observe(supportSection);

  // Contact section slide in/out right faster
  const contactSection = document.getElementById("contact");
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) contactSection.classList.add("visible");
      else contactSection.classList.remove("visible");
    });
  }, {threshold: 0.3});
  contactObserver.observe(contactSection);

});
