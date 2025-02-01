// ==================== HOME.JS PART ====================
document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const abbrTextInput = document.getElementById("abbrText");
    const fullTextInput = document.getElementById("fullText");
    const abbrSizeInput = document.getElementById("abbrSize");
    const fullSizeInput = document.getElementById("fullSize");
    const textColorInput = document.getElementById("textColor");
    const gradientStartInput = document.getElementById("gradientStart");
    const gradientEndInput = document.getElementById("gradientEnd");
    const gradientTypeInput = document.getElementById("gradientType");
    const fontStyleInput = document.getElementById("fontStyle");
    const shapeStyleInput = document.getElementById("shapeStyle");
    const downloadBtn = document.getElementById("downloadBtn");
    const logoPreview = document.getElementById("logoPreview");
    const previewAbbr = document.getElementById("previewAbbr");
    const previewFull = document.getElementById("previewFull");
    const logoCanvas = document.getElementById("logoCanvas");
    const ctx = logoCanvas.getContext("2d");
  
    // Update Preview Function
    const updatePreview = () => {
      const abbrText = abbrTextInput.value || "SE";
      const fullText = fullTextInput.value || "Saxansaxo Electronics";
      const abbrSize = abbrSizeInput.value;
      const fullSize = fullSizeInput.value;
      const textColor = textColorInput.value;
      const gradientStart = gradientStartInput.value;
      const gradientEnd = gradientEndInput.value;
      const gradientType = gradientTypeInput.value;
      const fontStyle = fontStyleInput.value;
      const shapeStyle = shapeStyleInput.value;
  
      // Update preview elements
      previewAbbr.textContent = abbrText;
      previewAbbr.style.fontSize = `${abbrSize}px`;
      previewAbbr.style.color = textColor;
      previewAbbr.style.fontFamily = fontStyle;
  
      previewFull.textContent = fullText;
      previewFull.style.fontSize = `${fullSize}px`;
      previewFull.style.color = textColor;
  
      // Update background and shape
      logoPreview.style.background =
        gradientType === "linear"
          ? `linear-gradient(${gradientStart}, ${gradientEnd})`
          : `radial-gradient(${gradientStart}, ${gradientEnd})`;
  
      logoPreview.style.borderRadius =
        shapeStyle === "circle"
          ? "50%"
          : shapeStyle === "ellipse"
          ? "50% / 30%"
          : "0";
    };
  
    // Download Logo Function (Corrected)
    const downloadLogo = () => {
      const abbrText = abbrTextInput.value || "SE";
      const fullText = fullTextInput.value || "Saxansaxo Electronics";
      const abbrSize = abbrSizeInput.value;
      const fullSize = fullSizeInput.value;
      const textColor = textColorInput.value;
      const gradientStart = gradientStartInput.value;
      const gradientEnd = gradientEndInput.value;
      const gradientType = gradientTypeInput.value;
      const fontStyle = fontStyleInput.value;
      const shapeStyle = shapeStyleInput.value;
  
      // Canvas setup
      logoCanvas.width = 600;
      logoCanvas.height = 600;
      ctx.clearRect(0, 0, logoCanvas.width, logoCanvas.height);
  
      // Create clipping path
      ctx.beginPath();
      if (shapeStyle === "circle") {
        ctx.arc(
          logoCanvas.width / 2,
          logoCanvas.height / 2,
          logoCanvas.width / 2,
          0,
          Math.PI * 2
        );
      } else if (shapeStyle === "ellipse") {
        ctx.ellipse(
          logoCanvas.width / 2,
          logoCanvas.height / 2,
          logoCanvas.width / 2,
          logoCanvas.height * 0.3,
          0,
          0,
          Math.PI * 2
        );
      } else {
        ctx.rect(0, 0, logoCanvas.width, logoCanvas.height);
      }
      ctx.closePath();
      ctx.clip();
  
      // Draw gradient background
      let gradient;
      if (gradientType === "linear") {
        gradient = ctx.createLinearGradient(0, 0, logoCanvas.width, logoCanvas.height);
      } else {
        gradient = ctx.createRadialGradient(
          logoCanvas.width / 2,
          logoCanvas.height / 2,
          0,
          logoCanvas.width / 2,
          logoCanvas.height / 2,
          Math.max(logoCanvas.width, logoCanvas.height) / 2
        );
      }
      gradient.addColorStop(0, gradientStart);
      gradient.addColorStop(1, gradientEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, logoCanvas.width, logoCanvas.height);
  
      // Draw text
      ctx.font = `${abbrSize}px ${fontStyle}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(abbrText, logoCanvas.width / 2, logoCanvas.height / 2 - 30);
  
      ctx.font = `${fullSize}px Arial`;
      ctx.fillText(fullText, logoCanvas.width / 2, logoCanvas.height / 2 + 30);
  
      // Create download link
      const link = document.createElement("a");
      link.download = "logo.png";
      link.href = logoCanvas.toDataURL("image/png");
      link.click();
    };
  
    // Event Listeners
    abbrTextInput.addEventListener("input", updatePreview);
    fullTextInput.addEventListener("input", updatePreview);
    abbrSizeInput.addEventListener("input", updatePreview);
    fullSizeInput.addEventListener("input", updatePreview);
    textColorInput.addEventListener("input", updatePreview);
    gradientStartInput.addEventListener("input", updatePreview);
    gradientEndInput.addEventListener("input", updatePreview);
    gradientTypeInput.addEventListener("input", updatePreview);
    fontStyleInput.addEventListener("input", updatePreview);
    shapeStyleInput.addEventListener("input", updatePreview);
    downloadBtn.addEventListener("click", downloadLogo);
  
    // Initial Preview
    updatePreview();
  });
  
  // ==================== ABOUT.JS PART ====================
  document.addEventListener("DOMContentLoaded", () => {
    const aboutLink = document.getElementById("aboutLink");
    const aboutSection = document.getElementById("about");
  
    // Event listener to toggle the About section
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      aboutSection.classList.toggle("hidden"); // Show or hide the section
      window.scrollTo({ top: aboutSection.offsetTop, behavior: "smooth" });
    });
  });
  
  // ==================== CHAPTERS.JS PART ====================
  document.addEventListener("DOMContentLoaded", () => {
    const chapterButtons = document.querySelectorAll(".answer-button");
  
    // Event listeners for chapter buttons
    chapterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling; // Get the answer div
        answer.classList.toggle("hidden"); // Toggle visibility
      });
    });
  });