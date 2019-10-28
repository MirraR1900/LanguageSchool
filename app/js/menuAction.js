$(function() {

    $('.navigationList li a').mouseover(function(event) {
        let target = $(event.target);
            if(target.is(".navigationList li a")) {
             let button = $('.navigationList li a');
                if(button != target) {
                  button.css({'filter': 'blur(2px)'});
                  target.css('filter', 'none');
                 }
            }
    });

    $('.navigationList li a').mouseout(function() {
        $('.navigationList li a').css('filter', 'none');
    });
    
});

