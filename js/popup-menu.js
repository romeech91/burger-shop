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
const listItem = document.querySelectorAll('.menu__popup-item');
const wrapper = document.querySelector('.wrapper');

openBtn.addEventListener('click', () => {
    popup.style.top = '0';
});

closeBtn.addEventListener('click', () => {
    popup.style.top = '-9999px';
});

for (var i = 0; i < listItem.length; i++) {
    var element = listItem[i];
    element.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.top = '-9999px';
    })
};

