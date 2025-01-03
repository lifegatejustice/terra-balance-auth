document.getElementById('menu').addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    const menu = document.getElementById('menu');
    nav.classList.toggle('open');
    menu.classList.toggle('open');
});