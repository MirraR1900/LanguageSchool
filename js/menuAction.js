$(function() {

    $('.navigationList li a').mouseover(function(event) {
        let target = $(event.target);
            if(target.is(".navigationList li a")) {
             let a = $('.navigationList li a');
                if(a != target) {
                  a.css({'filter': 'blur(2px)'});
                  target.css('filter', 'none');
                 }
            }
    });

    $('.navigationList li a').mouseout(function() {
        $('.navigationList li a').css('filter', 'none');
    });
    
});

