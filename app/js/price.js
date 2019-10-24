$(function() {
    
    $('.costCalculation button').bind('click', function() {
        let target = $(this);
        let elem =  target.attr("id");
        let parent = $(this).parent().attr('class');
        console.log(parent);
       switch(elem) {
           case "adults": 
           case "pupils": 
           case "preschoolers": $(".teacher").css('display', 'block');
                                target.css('border', '2px solid rgb(147, 112, 219)');
                                borderColor(target, parent);
                                
           break;
           case "russianSpeaker": 
           case "native":  $(".course").css('display', 'block');
           break;
           case "miniGroup": 
           case "bigGroup": 
           case "privatelLessons": 
           case "examPreparation":
           case "internationalExam": $(".intensity").css('display', 'block');
           break;
           case "threeHours": 
           case "fourHours": 
           case "sixHours":  $(".days").css('display', 'block');
           break;
           case "weekdays": 
           case "weekend": 
           case "weekdaysAndWeekend": alert("All");
           break;
       }
       
    });

    function borderColor(elemId, elemClass) { };

    

    
    




});