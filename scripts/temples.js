const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        menuBtn.textContent = '✖';
    } else {
        menuBtn.textContent = '☰';
    }
});

/* Footer */

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;