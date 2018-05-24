/* team__block__item--active */

const itemList = document.querySelector('.team__block__list');
const items = document.querySelectorAll('.team__block__item');

itemList.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.className === 'block__item-btn') {
        let item = target.closest('.team__block__item'); //ближайший
        if (item.classList.contains('team__block__item--active')) {
            item.classList.toggle('team__block__item--active');
        } else {
            items.forEach(function(item, index) {
                item.classList.remove('team__block__item--active');
            });
            item.classList.add('team__block__item--active');
        }
    }
});