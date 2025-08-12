// main.js

function setupMobileMenu() {
    const header = document.querySelector('header');
    if (!header) return;

    const nav = document.querySelector('.nav-links');
    if (!nav) return;

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('menu-toggle');
    toggleButton.innerHTML = '☰';
    header.querySelector('.navbar').prepend(toggleButton);

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
            nav.classList.remove('active');
            toggleButton.classList.remove('active');
        }
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleButton.classList.remove('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);