const sections = $('.section');
const display = $('.maincont');

const performTransition = sectionEq => {
    const position = `$(-sectionEq * 100)%`;

    display.css({
        transform: `translateY(${position})`,
        '-web-kit-transform': `translateY(${position})`
    });
}

$(document).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;

    if(deltaY > 0) {
        performTransition(2);
    } 

    if(deltaY < 0) {
        console.log('up!');
    }
});