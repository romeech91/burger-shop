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
const popup = $('.menu__popup');
const wrapper = document.querySelector('.wrapper');

openBtn.addEventListener('click', function() {
    popup.fadeIn();
    popup.addClass('menu__popup--active');
    wrapper.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    popup.fadeOut();
    popup.removeClass('menu__popup--active');
    wrapper.style.overflow = 'none';
});

