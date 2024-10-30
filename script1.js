// JavaScript for the Toggle Menu
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
