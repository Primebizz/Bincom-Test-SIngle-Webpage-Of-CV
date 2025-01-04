
document.addEventListener("DOMContentLoaded", function () {

  const progressBars = document.querySelectorAll(".progress-bar");

  
  progressBars.forEach((bar) => {
      
      const skillLevel = bar.getAttribute("data-skill");
      
      
      bar.style.setProperty("--progress-width", `${skillLevel}%`);
  });
});


  
  const formTitle = document.querySelector(".contact-section h2");
formTitle.addEventListener("mouseover", () => {
  formTitle.textContent = "👋 Let's Connect!";
});
formTitle.addEventListener("mouseout", () => {
  formTitle.textContent = "Contact Me";
});
