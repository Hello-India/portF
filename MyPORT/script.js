document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for projects to open on scroll
  const projects = document.querySelectorAll(".project-card.closed");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("closed");
        entry.target.classList.add("open");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  projects.forEach((p) => observer.observe(p));

  // Keyboard flip toggle on projects for accessibility
  projects.forEach((project) => {
    project.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        project.classList.toggle("flipped");
      }
    });
  });

  // Scroll down button smooth scroll
  const scrollBtn = document.getElementById("scroll-down-btn");
  scrollBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  // Studies section cube tilt rotation effect on next button
  const studyBox = document.getElementById("study-box");
  const nextBtn = document.getElementById("next-study-btn");

  const studies = [
    {
      title: "OXFORD UNIVERSITY",
      degree: "B.Tech in Computer Science & Engineering",
      details:
        "Graduated with perfect 10 CGPA - a hallmark of dedication and excellence.",
    },
    {
      title: "KENDRIYA VIDYALAYA",
      degree: "High School - PCM",
      details:
        "Completed rigorous academics in Physics, Chemistry, and Mathematics with flying colors.",
    },
  ];
  let currentStudyIndex = 0;

  function updateStudy() {
    studyBox.style.transform = "rotateY(90deg)";
    setTimeout(() => {
      studyBox.innerHTML = `<h2>${studies[currentStudyIndex].title}</h2>
         <h3>${studies[currentStudyIndex].degree}</h3>
         <p>${studies[currentStudyIndex].details}</p>`;
      studyBox.style.transform = "rotateY(0deg)";
    }, 450);
  }
  nextBtn.addEventListener("click", () => {
    currentStudyIndex = (currentStudyIndex + 1) % studies.length;
    updateStudy();
    // Animate button a bit on click
    nextBtn.style.transform = "rotateY(45deg)";
    setTimeout(() => {
      nextBtn.style.transform = "rotateY(0deg)";
    }, 300);
  });
  updateStudy();

  // Reveal sections on scroll with animation classes
  const rollSections = document.querySelectorAll(".roll-animation");
  const flipSections = document.querySelectorAll(".flip-animation");
  const cubeSections = document.querySelectorAll(".cube-animation");
  const rotateSections = document.querySelectorAll(".rotate-animation");

  function revealSections() {
    const windowHeight = window.innerHeight;
    // Roll animation
    rollSections.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.8) {
        el.style.animationPlayState = "running";
      }
    });
    // Flip animation
    flipSections.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.8) {
        el.style.animationPlayState = "running";
      }
    });
    // Cube animation
    cubeSections.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.8) {
        el.style.animationPlayState = "running";
      }
    });
    // Rotate animation
    rotateSections.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.85) {
        el.style.animationPlayState = "running";
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();
});
