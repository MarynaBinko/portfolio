
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("about-me");
    const text = textElement.textContent.trim();
    textElement.innerHTML = ""; 
  
    text.split(" ").forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.opacity = 0;
      span.style.marginRight = "8px"; 
      textElement.appendChild(span);
    });
  
    const spans = textElement.querySelectorAll("span");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = 1;
      }, 300 * index); 
    });
  });
