document.addEventListener("DOMContentLoaded", () => {
  // Scroll down button smooth scroll
  const scrollBtn = document.getElementById("scroll-down-btn");
  scrollBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // About Image toggle blur on click
  const aboutSection = document.getElementById("about");
  const aboutImageWrapper = aboutSection.querySelector(".about-image-wr");
  const overlay = aboutImageWrapper.querySelector(".image-overlay");

  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    aboutImageWrapper.classList.add("clear");
  });

  // About section fade slide up on scroll + image blur toggle
  const aboutText = aboutSection.querySelector(".about-text");
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
        // Also reset image blur and overlay if scrolled up
        overlay.classList.remove("hidden");
        aboutImageWrapper.classList.remove("clear");
      }
    });
  }, {
    threshold: 0.6
  });
  aboutObserver.observe(aboutSection);

  // Projects Zoom in/out on scroll, with faster response
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
  }, { threshold: 0.45 });
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
  }, { threshold: 0.45 });
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
  }, {threshold: 0.45});
  experiences.forEach(exp => expObserver.observe(exp));

  // Support section slide in/out left
  const supportSection = document.getElementById("support");
  const supportObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) supportSection.classList.add("visible");
      else supportSection.classList.remove("visible");
    });
  }, {threshold: 0.45});
  supportObserver.observe(supportSection);

  // Contact section slide in/out right
  const contactSection = document.getElementById("contact");
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) contactSection.classList.add("visible");
      else contactSection.classList.remove("visible");
    });
  }, {threshold: 0.45});
  contactObserver.observe(contactSection);

});
