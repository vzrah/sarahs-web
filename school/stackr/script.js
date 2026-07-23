// ==========================================================
// WAIT UNTIL THE DOCUMENT HAS FULLY LOADED
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  // ======================================================
  // SMOOTH SCROLLING FOR NAVIGATION LINKS
  // ======================================================
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent default jump behaviour
      event.preventDefault();

      // Get target section ID from href attribute
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Scroll smoothly to the section
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // ======================================================
  // TOAST NOTIFICATION WHEN ADD BUTTON IS CLICKED
  // ======================================================
  const addButtons = document.querySelectorAll('.add-btn');
  const toast = document.getElementById('toast');

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Show notification
      toast.classList.add('show');

      // Hide notification after 2 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    });
  });

  // ======================================================
  // SCROLL REVEAL ANIMATION
  // ======================================================
  const revealElements = document.querySelectorAll('.reveal, .fade-in');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      // If element is within viewport, add active class
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }

  // Run once on page load
  revealOnScroll();

  // Run again whenever user scrolls
  window.addEventListener('scroll', revealOnScroll);

  // ======================================================
  // SCROLL PROGRESS BAR
  // ======================================================
  const progressBar = document.getElementById('progress-bar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Calculate percentage scrolled
    const progress = (scrollTop / documentHeight) * 100;

    // Update width of progress bar
    progressBar.style.width = progress + '%';
  });
});
