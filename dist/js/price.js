$(function() {
    let parent;
    let target; 
    
    $('.costCalculation button').bind('click', function() {
        target = $(this);
        let elem =  target.attr("id");
       switch(elem) {
           case "adults": 
           case "pupils": 
           case "preschoolers": $(".teacher").css('display', 'block');
                                parent = $('.age');
                                borderColor(target, parent);
                                
           break;
           case "russianSpeaker": 
           case "native":  $(".course").css('display', 'block');
                           parent = $('age');
           break;
           case "miniGroup": 
           case "bigGroup": 
           case "privatelLessons": 
           case "examPreparation":
           case "internationalExam": $(".intensity").css('display', 'block');
                                    parent = $('age');
           break;
           case "threeHours": 
           case "fourHours": 
           case "sixHours":  $(".days").css('display', 'block');
                            parent = $('age');
           break;
           case "weekdays": 
           case "weekend": 
           case "weekdaysAndWeekend": alert("All");
                                    parent = $('age');
           break;
       }
       
    });

    function borderColor(elemId, parent) {
        let array = parent.children();
        for( let i = 0; i < array.length - 1; i++) {
            console.log(array[i]);
            if(array[i] === target) {
                console.log("h");
            }
        }
       
        elemId.css('border', '2px solid rgb(147, 112, 219)');
    };
});