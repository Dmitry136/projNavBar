const menuToggle = document.querySelector('.menu_toggle');
const nav = document.querySelector('.navigation');

menuToggle.onclick = function() {
    nav.classList.toggle('active');
};