const burgerOpen = document.querySelector('.overlay--close');

function openBurgerNav() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burgerOpen.classList.add('overlay--active');
    })
}

function closeBurgerNav(){
    const bntCloseBurger = document.querySelector('.burger-nav__btn--close');
    bntCloseBurger.addEventListener('click', () => {
        burgerOpen.classList.remove('overlay--active');
    })
}

openBurgerNav(); 
closeBurgerNav();