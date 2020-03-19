$(function() {
    let contentPage = $('#contentPage');
    let adultsEn = 'page/adultsEn.php';
    let pupilsEn = 'page/pupilsEn.php';
    let preschoolersEn = 'page/preschoolersEn.php';
    let examEn = 'page/examsEn.php';
    
    let adultsDe = 'page/adultsDe.php';
    let pupilsDe = 'page/pupilsDe.php';
    let preschoolersDe = 'page/preschoolersDe.php';
    let examDe = 'page/examsDe.php';

    let fontMobile = $('.fontMobile');
    let adultsEnMobile = 'page/adultsEn.php';
    let pupilsEnMobile = 'page/pupilsEn.php';
    let preschoolersEnMobile = 'page/preschoolersEn.php';
    let examEnMobile = 'page/examsEn.php';

    let adultsDeMobile = 'page/adultsDe.php';
    let pupilsDeMobile = 'page/pupilsDe.php';
    let preschoolersDeMobile = 'page/preschoolersDe.php';
    let examDeMobile = 'page/examsDe.php';

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

    /* The function for the mobile menu is responsible 
     for the appearance of the menu when you press the "Menu" button */
    $('#MenuBtn').click(function() {
       $('.fontMobile').animate({opacity: 'toggle'}, 1500);
    });

    $('#closeMenu').click(function(){
        $('.fontMobile').animate({opacity:'toggle'}, 1500);
    });

    // Desktop menu
    $('#adultsEn').on('click', loadContent.bind(null, contentPage, adultsEn));
    $('#pupilsEn').on('click', loadContent.bind(null, contentPage, pupilsEn));
    $('#preschoolersEn').on('click', loadContent.bind(null, contentPage, preschoolersEn));
    $('#examEn').on('click', loadContent.bind(null, contentPage, examEn));

    $('#adultsDe').on('click', loadContent.bind(null, contentPage, adultsDe));
    $('#pupilsDe').on('click', loadContent.bind(null, contentPage, pupilsDe));
    $('#preschoolersDe').on('click', loadContent.bind(null, contentPage, preschoolersDe));
    $('#examDe').on('click', loadContent.bind(null, contentPage, examDe));

   // Mobile menu
    $('#adultsEnMobile').on('click', loadContent.bind(null, contentPage, adultsEnMobile));
    $('#adultsEnMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#pupilsEnMobile').on('click', loadContent.bind(null, contentPage, pupilsEnMobile));
    $('#pupilsEnMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#preschoolersEnMobile').on('click', loadContent.bind(null, contentPage, preschoolersEnMobile, fontMobile));
    $('#preschoolersEnMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#examEnMobile').on('click', loadContent.bind(null, contentPage, examEnMobile, fontMobile));
    $('#examEnMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#adultsDeMobile').on('click', loadContent.bind(null, contentPage, adultsDeMobile, fontMobile));
    $('#adultsDeMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#pupilsDeMobile').on('click', loadContent.bind(null, contentPage, pupilsDeMobile, fontMobile));
    $('#pupilsDeMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#preschoolersDeMobile').on('click', loadContent.bind(null, contentPage, preschoolersDeMobile, fontMobile));
    $('#preschoolersDeMobile').on('click', closeMenu.bind(null, fontMobile));

    $('#examDeMobile').on('click', loadContent.bind(null, contentPage, examDeMobile, fontMobile));
    $('#examDeMobile').on('click', closeMenu.bind(null, fontMobile));

    // Loads content to the page when clicking on the links in the menu
    function loadContent(idContainer, path, menuMobile) {
        $(idContainer).load(path);
    }

    // Closes mobile menu when clicking on the links in the menu
    function closeMenu(menuMobile) {
        menuMobile.animate({opacity:'toggle'}, 400);
    }
});