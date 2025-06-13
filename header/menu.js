function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const button = document.getElementById('menuButton');
    menu.classList.toggle('open');
    button.classList.toggle('active');
    button.textContent = menu.classList.contains('open') ? '✖' : '☰';
}