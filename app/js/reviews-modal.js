const openBTN = document.querySelectorAll('.reviews__content-btn');
const succesOverlay = createOverlay("Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");
const reviewsBlock = document.querySelector('.reviews');

for (var i = 0; i < openBTN.length; i++) {
    var evenBtn = openBTN[i];
    evenBtn.addEventListener('click', () => {
        reviewsBlock.appendChild(succesOverlay);
    });
}

function createOverlay(content) {
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('reviews__overlay');

    const template = document.querySelector('#overlayReviews');
    overlayElement.innerHTML = template.innerHTML;

    const closeElement = overlayElement.querySelector('.reviews__overlay-close');
    closeElement.addEventListener('click', (e) => {
        e.preventDefault();
        reviewsBlock.removeChild(overlayElement);
    });

    const contentElement = overlayElement.querySelector('.reviews__overlay-content');
    contentElement.innerHTML = content;

    return overlayElement;
}
