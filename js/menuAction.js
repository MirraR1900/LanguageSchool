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

    // $('li').click(function(event) {
    //     $('li').removeClass('visible');
    //     $('li').addClass('hidden');
    //     let target = $(event.target);
    //     target.removeClass('hidden');
    //     target.addClass('visible');
    //     console.log(target.attr("class"));
    //     let elemClass = target.attr("class");
    // });

      // $('.english p').click(function() {
    //     flagLanguage = "en";
    //     if(flagLanguage == "en") {
    //     $('.german p').css('color', 'rgb(211, 211, 211)'); // LightGrey
    //     $('.english p').css('color', 'rgb(255, 255, 255)'); // white
    //     $('.navigationEnglish').css('display', 'block');
    //     $('.navigationGerman').css('display', 'none');
    //     } 
    //     console.log(flagLanguage);
    // });

    // $('.german p').click(function() {
    //     flagLanguage = "de";
    //     if(flagLanguage == "de") {
    //         $('.english p').css('color', 'rgb(211, 211, 211)'); // LightGrey
    //         $('.german p').css('color', 'rgb(255, 255, 255)');  // white
    //         $('.navigationGerman').css('display', 'block');
    //         $('.navigationEnglish').css('display', 'none');
    //     } 
    //     console.log(flagLanguage);
    // });

    
});

