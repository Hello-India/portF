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

  // About section reveal fade slide with image blur toggle
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('visible');
      } else {
        aboutSection.classList.remove('visible');
        overlay.classList.remove("hidden");
        aboutImageWrapper.classList.remove("clear");
      }
    });
  }, { threshold: 0.5 });
  aboutObserver.observe(aboutSection);

  // Projects Zoom in/out on scroll with flip on click/focus
  const projects = document.querySelectorAll(".project-card");
  const projObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("open");
        entry.target.classList.remove("closed");
      } else {
        entry.target.classList.remove("open");
        entry.target.classList.add("closed");
        entry.target.classList.remove("flipped"); // reset flip when scrolled out
      }
    });
  }, { threshold: 0.4 });
  projects.forEach(p => {
    projObserver.observe(p);
    p.addEventListener('click', () => {
      p.classList.toggle('flipped');
    });
    // allow keyboard toggle flip
    p.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        p.classList.toggle("flipped");
      }
    });
  });

  // Studies sliding from sides
  const studiesSection = document.getElementById("studies");
  let leftBox = studiesSection.querySelector(".left-box");
  let rightBox = studiesSection.querySelector(".right-box");
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
  }, { threshold: 0.4 });
  studiesObserver.observe(studiesSection);

  // Experience circular zoom + rotation on scroll visible
  const experiences = document.querySelectorAll(".experience-box");
  const expObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {threshold: 0.4});
  experiences.forEach(exp => expObserver.observe(exp));

  // Support show/hide sliding left
  const supportSection = document.getElementById("support");
  const supportObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) supportSection.classList.add("visible");
      else supportSection.classList.remove("visible");
    });
  }, {threshold: 0.4});
  supportObserver.observe(supportSection);

  // Contact show/hide sliding right
  const contactSection = document.getElementById("contact");
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) contactSection.classList.add("visible");
      else contactSection.classList.remove("visible");
    });
  }, {threshold: 0.4});
  contactObserver.observe(contactSection);
});
