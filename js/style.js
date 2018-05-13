/* const phoneNumber = document.querySelector("#form__input-phone");

phoneNumber.addEventListener('keydown', function(event) {
    let isTrueKeys = false;
    if (event.key >= 0 || event.key <= 9 || event.key == "Backspace" || event.key == "-" || event.key == "+" || event.key == "(" || event.key == ")" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
        isTrueKeys = true;
    }
    if (!isTrueKeys) {
        event.preventDefault();
    }
}); */

///////////POPUP__MENU__THERE

const openBtn = document.querySelector('.hambg__menu');
const closeBtn = document.querySelector('.menu__popup-close');
const popup = document.querySelector('.menu__popup');
const wrapper = document.querySelector('.wrapper');

openBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
    wrapper.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    wrapper.style.overflow = 'none';
});