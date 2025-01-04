// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all progress bars
    const progressBars = document.querySelectorAll(".progress-bar");
  
    // Loop through each progress bar
    progressBars.forEach((bar) => {
      // Get the skill level from the data attribute
      const skillLevel = bar.getAttribute("data-skill");
      
      // Set the width of the progress bar dynamically
      bar.style.setProperty("--progress-width", `${skillLevel}%`);
      bar.style.setProperty("position", "relative");
  
      // Create an inline style for the pseudo-element (::after)
      const style = document.createElement("style");
      style.innerHTML = `
        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(to right, #71e694da, #949ef8de);
          width: ${skillLevel}%;
          border-radius: inherit;
        }
      `;
      document.head.appendChild(style);
    });
  });
  
  const formTitle = document.querySelector(".contact-section h2");
formTitle.addEventListener("mouseover", () => {
  formTitle.textContent = "👋 Let's Connect!";
});
formTitle.addEventListener("mouseout", () => {
  formTitle.textContent = "Contact Me";
});
