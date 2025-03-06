const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');
const menuItems = document.querySelectorAll('.nav-responsive a');

menuHamburguer.addEventListener('click', () => {
    toogleMenu();
});

function toogleMenu() {
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.style.display = 'none';
        menuHamburguer.classList.remove('change');
    });
});
