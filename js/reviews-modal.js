const openBTN = document.querySelectorAll('.reviews__content-btn');
const succesOverlay = createOverlay("Текст комментария");
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
