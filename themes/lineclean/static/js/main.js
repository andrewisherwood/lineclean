// FAQ toggle
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.parentElement;
      card.classList.toggle('active');
    });
  });

  // Menu toggle
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });
  