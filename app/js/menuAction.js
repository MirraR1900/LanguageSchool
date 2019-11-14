$(function() {

    // Functions responsible for the effects of the mouse over the menu
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

    // The function for the mobile menu is responsible 
    // for the appearance of the menu when you press the "Menu" button
    $('.navMobile').click(function() {
        $('.menuMobile').animate({width:'toggle'}, 450);
    });
    
});

