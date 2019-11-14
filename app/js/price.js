$(function() {

    //The function is responsible for displaying the form "Cost of courses"

    let target; 
    let elem;
    let buttonBorder = {border: '2px solid rgb(255, 255, 255)'};
    let targetBorder = {border: '3px solid rgb(255, 0, 0)'};
    
    $('.costCalculation button').bind('click', function() {
        target = $(this);
        elem =  target.attr("id");
       switch(elem) {
           case "adults": 
           case "pupils": 
           case "preschoolers": $(".teacher").css('display', 'block');
                                $('.age button').css(buttonBorder);
                                target.css(targetBorder);
                                
                                
           break;
           case "russianSpeaker": 
           case "native":  $(".course").css('display', 'block');
                           $('.teacher button').css(buttonBorder);
                           target.css(targetBorder);
           break;
           case "miniGroup": 
           case "bigGroup": 
           case "privatelLessons": 
           case "examPreparation":
           case "internationalExam": $(".intensity").css('display', 'block');
                                     $('.course button').css(buttonBorder);
                                     target.css(targetBorder);
           break;
           case "threeHours": 
           case "fourHours": 
           case "sixHours":  $(".days").css('display', 'block');
                             $('.intensity button').css(buttonBorder);
                             target.css(targetBorder);
           break;
           case "weekdays": 
           case "weekend": 
           case "weekdaysAndWeekend": $('.days button').css(buttonBorder);
                                      target.css(targetBorder);
                                      $('.schedule').css('display', 'block');
           break;
       }
       
    });

});