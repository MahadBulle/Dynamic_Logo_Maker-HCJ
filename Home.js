document.addEventListener('DOMContentLoaded', () => {
  const logoText = document.getElementById('logoText');
  const textColor = document.getElementById('textColor');
  const bgColor = document.getElementById('bgColor');
  const fontSize = document.getElementById('fontSize');
  const previewText = document.getElementById('previewText');
  const logoPreview = document.getElementById('logoPreview');
  const downloadBtn = document.getElementById('downloadBtn');

  // Function to update logo preview
  const updateLogoPreview = () => {
    previewText.textContent = logoText.value || 'Your Logo';
    previewText.style.color = textColor.value;
    logoPreview.style.backgroundColor = bgColor.value;
    previewText.style.fontSize = `${fontSize.value}px`;
  };

  // Update logo preview on input change
  logoText.addEventListener('input', updateLogoPreview);
  textColor.addEventListener('input', updateLogoPreview);
  bgColor.addEventListener('input', updateLogoPreview);
  fontSize.addEventListener('input', updateLogoPreview);

  // Download logo as image
  downloadBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = logoPreview.offsetWidth;
    const height = logoPreview.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    // Draw background
    context.fillStyle = bgColor.value;
    context.fillRect(0, 0, width, height);

    // Draw text
    context.font = `${fontSize.value}px Arial`;
    context.fillStyle = textColor.value;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(previewText.textContent, width / 2, height / 2);

    // Download image
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
