const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // optional UX upgrade: change icon
    menuBtn.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// last modified
document.getElementById('modified').textContent = document.lastModified;