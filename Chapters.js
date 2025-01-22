document.addEventListener('DOMContentLoaded', () => {
    const chaptersLink = document.getElementById('chaptersLink');
    const chaptersSection = document.getElementById('chapters');
  
    // Event listener to toggle the Chapters section
    chaptersLink.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      chaptersSection.classList.toggle('hidden'); // Show or hide the section
      window.scrollTo({ top: chaptersSection.offsetTop, behavior: 'smooth' });
    });
  });
  
  // Function to toggle answer visibility
  function toggleAnswer(chapterNumber) {
    const answer = document.getElementById(`answer${chapterNumber}`);
    answer.classList.toggle('hidden');
  }
  