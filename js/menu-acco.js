//acco__item--active


const listItems = document.querySelector('.acco__list');
const Items = document.querySelectorAll('.acco__item');

listItems.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if (target.className === "acco__item__block-txt") {
        let item = target.closest('.acco__item');
        if (item.classList.contains('acco__item--active')) {
            item.classList.toggle('acco__item--active');
        } else {
            Items.forEach(function(item, index) {
                item.classList.remove('acco__item--active');
            });
            item.classList.add('acco__item--active');
        }
    };

});


