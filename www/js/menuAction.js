$(function() {
    $('#adultsEn').css({'border-bottom': '6px solid rgb(255, 255, 255)'});
    $('#adultsDe').css({'border-bottom': '6px solid rgb(255, 255, 255)'});

    // Functions responsible for the effects of the mouse over the menu
    $('.navigationList li button').mouseover(function(event) {
        let target = $(event.target);
            if(target.is(".navigationList li button")) {
             let button = $('.navigationList li button');
                if(button != target) {
                  button.css({'filter': 'blur(2px)'});
                  target.css('filter', 'none');
                 }
            }
    });

    $('.navigationList li button').click(function(event) {
        let target = $(event.target);
            if(target.is(".navigationList li button")) {
             let button = $('.navigationList li button');
                if(button != target) {
                  $('#adultsEn').css({'border-bottom': 'none'});
                  button.css({'border-bottom': 'none'});
                  target.css({'border-bottom': '6px solid rgb(255, 255, 255)'});
                 }
            }
    });

    $('.navigationList li button').mouseout(function() {
        $('.navigationList li button').css('filter', 'none');
    });

    // The function for the mobile menu is responsible 
    // for the appearance of the menu when you press the "Menu" button
    $('.navMobile').click(function() {
        $('.menuMobile').animate({width:'toggle'}, 450);
    });

    $('#adultsEn').click(function() {
        $('#contentPage').load('page/adultsEn.php');
    });
    $('#pupilsEn').click(function() {
        $('#contentPage').load('page/pupilsEn.php');
    });

    $('#preschoolersEn').click(function() {
        $('#contentPage').load('page/preschoolersEn.php');
    });
    $('#examEn').click(function() {
        $('#contentPage').load('page/examsEn.php');
    });

    $('#adultsDe').click(function() {
        $('#contentPage').load('page/adultsDe.php');
    });
    $('#pupilsDe').click(function() {
        $('#contentPage').load('page/pupilsDe.php');
    });

    $('#preschoolersDe').click(function() {
        $('#contentPage').load('page/preschoolersDe.php');
    });
    $('#examDe').click(function() {
        $('#contentPage').load('page/examsDe.php');
    });    
});