// burger --slider-- 
$(function () {

    var moveSlide = function (container, slideNum) {
      var 
        items = container.find('.burger__carousel'),
        activeSlide = items.filter('.burger_is-active')
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        list = container.find('.burger__carousel-list'),
        duration = 500;
  
      if (reqItem.length) {
        list.animate({
          'left': -reqIndex * 100 + '%'
        }, duration, function () {
          activeSlide.removeClass('burger_is-active');
          reqItem.addClass('burger_is-active');
        });
      };
    };
  
  
    $('.slider__btn').on('click', function (e) {
      e.preventDefault();
  
          var $this = $(this),
              container = $this.closest('.burger-slider'),
              items = $('.burger__carousel', container),
              activeItem = items.filter('.burger_is-active'),
              existedItem, edgeItem, reqItem;
  
      if ($this.hasClass('slider_btn_next')) {// вперед
        existedItem = activeItem.next();
        edgeItem = items.first();
      }
      if ($this.hasClass('slider_btn_prev')) { //назад
        existedItem = activeItem.prev();
        edgeItem = items.last();  
      }
      reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
      
      moveSlide(container, reqItem);
  
    });
  });
  
  
  // --ingridients--
  const btnIngridients = document.querySelector('.block__float-ingridients');
  const floatIngridients = document.querySelector('.float-ingridients__list');
  const container = document.querySelector('.burger-container');

  btnIngridients.addEventListener('mousemove', () => {
    floatIngridients.style.opacity = '1';
    floatIngridients.style.left = '100%';
  });
  container.addEventListener('mouseover', () => {
    floatIngridients.style.opacity = '0';
    floatIngridients.style.left = '-9999px';
  });
  