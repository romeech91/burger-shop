var button = document.querySelectorAll('.acco__item__block');
var cont = document.querySelectorAll('.acco__item__content');

var changeWidth = function(param) {
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            for (var i = 0; i < cont.length; i++) {
                cont[i].style.width = param;
            }
        });
    }
}

changeWidth('500px');

