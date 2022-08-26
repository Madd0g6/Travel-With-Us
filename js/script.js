window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__menu'),
    menuItem = document.querySelectorAll('.navigation__menu-items'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation__menu_active');
        })
    })
})