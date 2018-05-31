
const itemList = document.querySelector('.team__block__list');
const items = document.querySelectorAll('.team__block__item');
let anim = $('.block__item-drop');

itemList.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.className === 'block__item-btn') {
        let item = target.closest('.team__block__item');
        if (item.classList.contains('team__block__item--active')) {
            anim.slideUp(200);
            anim.slideDown(200);
            item.classList.toggle('team__block__item--active');

        } else {
            items.forEach(function(item, index) {
                item.classList.remove('team__block__item--active');
            });
            anim.slideUp(100);
            anim.slideDown(100);
            item.classList.add('team__block__item--active');
            
        }
    }
});