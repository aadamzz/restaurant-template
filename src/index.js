import './styles/main.scss';

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector('.header_navigation-list');

const handleClickBurger = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle("toggle_menu");
}

hamburger.addEventListener('click', handleClickBurger);

const socialMediaIcons = document.querySelectorAll('.icon');
const scroll_up_container = document.querySelector('#scroll-container-up');
const scroll_up = document.querySelector('.scroll-up');

scroll_up_container.addEventListener('mouseover', () => {
    scroll_up.style.borderBottom = "4px solid #f5d43f";
    scroll_up.style.borderRight = "4px solid #f5d43f";
})

scroll_up_container.addEventListener('mouseout', () => {
    scroll_up.style.borderBottom = "4px solid #fff";
    scroll_up.style.borderRight = "4px solid #fff";
})

socialMediaIcons.forEach(icon => {
    icon.addEventListener('mouseover', event => {
        event.currentTarget.style.stroke = "#f5d43f";
    })
})

socialMediaIcons.forEach(icon => {
    icon.addEventListener('mouseout', event => {
        event.currentTarget.style.stroke = "#fff";
    })
})
