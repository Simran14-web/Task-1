// Optional Scroll Effect (can be extended later)
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#08306b';
  } else {
    navbar.style.backgroundColor = '#0d47a1';
  }
});
