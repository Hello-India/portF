document.addEventListener("DOMContentLoaded", () => {
  // === Welcome Section ===
  // No direct JS — CSS animations handle fadeSlideUp

  // Scroll down button smooth scroll
  const scrollBtn = document.getElementById("scroll-down-btn");
  scrollBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // === About Section ===
  const aboutSection = document.getElementById("about");
  const aboutImage = aboutSection.querySelector(".about-image-container");

  // Fade slide animation + translucent image visibility on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        if(entry.target.id === "about"){
          aboutImage.classList.add("visible");
        }
      } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(40px)";
        if(entry.target.id === "about"){
          aboutImage.classList.remove("visible");
        }
      }
    });
  }, {threshold: 0.5});
  revealObserver.observe(aboutSection);

  // === Projects Section ===
  const projects = document.querySelectorAll(".project-card");
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("open");
        entry.target.classList.remove("closed");
      } else {
        entry.target.classList.remove("open");
        entry.target.classList.add("closed");
      }
    });
  }, { threshold: 0.35 });
  projects.forEach(p => {
    projectObserver.observe(p);

    // Keyboard toggle flip for accessibility
    p.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        p.classList.toggle("flipped");
      }
    });
  });


  // === Studies Section ===
  const leftBox = document.querySelector(".study-box.left-box");
  const rightBox = document.querySelector(".study-box.right-box");
  const studiesSection = document.getElementById("studies");

  const studiesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        leftBox.classList.add("visible");
        rightBox.classList.add("visible");
      } else {
        leftBox.classList.remove("visible");
        rightBox.classList.remove("visible");
      }
    });
  }, {threshold: 0.5});
  studiesObserver.observe(studiesSection);


  // === Experience Section ===
  const experiences = document.querySelectorAll(".experience-box");
  const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {threshold: 0.5});
  experiences.forEach(exp => expObserver.observe(exp));


  // === Support Section Slide-in from left ===
  const supportSection = document.getElementById("support");
  const supportObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) supportSection.classList.add("visible");
      else supportSection.classList.remove("visible");
    });
  }, {threshold: 0.5});
  supportObserver.observe(supportSection);


  // === Contact Section Slide-in from right ===
  const contactSection = document.getElementById("contact");
  const contactObserver = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting) contactSection.classList.add("visible");
      else contactSection.classList.remove("visible");
    });
  }, {threshold: 0.5});
  contactObserver.observe(contactSection);

});
