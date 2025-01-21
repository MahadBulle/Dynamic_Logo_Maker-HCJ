document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    const aboutSection = document.getElementById('about');
  
    // Event listener to toggle the About section
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      aboutSection.classList.toggle('hidden'); // Show or hide the section
      window.scrollTo({ top: aboutSection.offsetTop, behavior: 'smooth' });
    });
  });
  