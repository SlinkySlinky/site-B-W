
const menuLinks = document.querySelectorAll('.nav__link[data-goto]')

menuLinks.forEach(link => {
    link.addEventListener('click', onLinkClick );
});

function onLinkClick(e) {
    const link = e.target
    const gotoBlock = document.querySelector(link.dataset.goto)
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('nav').offsetHeight;

    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"

    });
    e.preventDefault();

    navBox.classList.remove('_active')
    menuIcon.classList.remove('_active')
    document.body.classList.remove('_lock')
}

const menuIcon = document.querySelector('.menu__icon');
const navBox = document.querySelector('.nav__box');

menuIcon.addEventListener('click', function(e) {
    navBox.classList.toggle('_active')
    menuIcon.classList.toggle('_active')
    document.body.classList.toggle('_lock')
});