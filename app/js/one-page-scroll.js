
const sections = $('.section');
const display = $('.maincont');
let inScroll = false;

const setActiveMenuItem = itemEq => {
  $('.nav__item')
  .eq(itemEq)
  .addClass('nav__item--active')
  .siblings()
  .removeClass('nav__item--active');
};

const performTransition = sectionEq => {
    const position = `${-sectionEq * 100}%`;

  if (inScroll) return;

  inScroll = true;

  sections
    .eq(sectionEq)
    .addClass('is-active')
    .siblings()
    .removeClass('is-active');
  display.css({
    transform: `translateY(${position})`,
    '-webkit-transform': `translateY(${position})`
  });
  const transitionDuration = parseInt(display.css('transition-duration')) * 1000; // time in ms
  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, transitionDuration + 100); // pf 300 мс проходит инерция мышки
};

const scrollToSection = direction => {
  const activeSection = sections.filter('.is-active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'up' && prevSection.length) {
    performTransition(prevSection.index());
  }
  if (direction === 'down' && nextSection.length) {
    performTransition(nextSection.index());
  }
};


$(document).on({
  wheel : (e) => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0
    ? 'down'
    : 'up'

      scrollToSection(direction);

  },
  keydown: e => {
    switch (e.keyCode) {
      case 40 :
        scrollToSection('down');
        break;
      case 38 :
        scrollToSection('up');
        break;
        
        break;
    
      default:
        break;
    }
  }
});

$('[data-scroll-to]').on('click', (e) => {
  e.preventDefault();
  
  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
  performTransition(target);
  
})

if (isMobile) {
  $(document).swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      const swipeDirection = direction === 'down' ? 'up' : 'down';
      scrollToSection(swipeDirection);
    }
  });
};
