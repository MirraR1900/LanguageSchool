let flagLanguage = "en";

$(function() {
    $('.english p').click(function() {
        flagLanguage = "en";
        if(flagLanguage == "en") {
        $('.german p').css('color', 'rgb(211, 211, 211)'); // LightGrey
        $('.english p').css('color', 'rgb(255, 255, 255)'); // white
        $('.navigationEnglish').css('display', 'block');
        $('.navigationGerman').css('display', 'none');
        } 
        console.log(flagLanguage);
    });

    $('.german p').click(function() {
        flagLanguage = "de";
        if(flagLanguage == "de") {
            $('.english p').css('color', 'rgb(211, 211, 211)'); // LightGrey
            $('.german p').css('color', 'rgb(255, 255, 255)');  // white
            $('.navigationGerman').css('display', 'block');
            $('.navigationEnglish').css('display', 'none');
        } 
        console.log(flagLanguage);
    });

    $('a').mouseover(function(event) {
        let target = $(event.target);
            if(target.is("a")) {
             let parent = target.parent();
             let li = $('a');
                if(li != target) {
                  li.css({'filter': 'blur(2px)'});
                  target.css('filter', 'none');
                 }
            }
    });

    $('a').mouseout(function(event) {
        $('a').css('filter', 'none');
    });

});

