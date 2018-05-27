$(document).ready(function() {

    let screen = 0,
        container = $('.maincont'),
        sections = $('.section'),
        inscroll = false;

    $('body').on('mousewheel', function(event) {
        if (!inscroll) {
            inscroll = true;
           if(event.deltaY > 0) {
            screen--;
            } else {
                screen++;
            } 
        }

        
        var position = (-screen * 100) + '%';

        container.css('top', position);

        setTimeout(function() {
            inscroll = false;
        }, 1300);
    });
});

