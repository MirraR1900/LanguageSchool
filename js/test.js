$(function() {
    let current =  $('.listTest div').first();

    let answer = [];
    let counter = 0;
    let x = 0;

    let radioArray;
    let r1 = $('.listTest div input[name="r1"]');
    let r2 = $('.listTest div input[name="r2"]');
    let r3 = $('.listTest div input[name="r3"]');
    let r4 = $('.listTest div input[name="r4"]');
    let r5 = $('.listTest div input[name="r5"]');
    let r6 = $('.listTest div input[name="r6"]');
    let r7 = $('.listTest div input[name="r7"]');
    let r8 = $('.listTest div input[name="r8"]');
    let r9 = $('.listTest div input[name="r9"]');
    let r10 = $('.listTest div input[name="r10"]');
    let r11 = $('.listTest div input[name="r11"]');
    let r12 = $('.listTest div input[name="r12"]');
    let r13 = $('.listTest div input[name="r13"]');
    let r14 = $('.listTest div input[name="r14"]');
    let r15 = $('.listTest div input[name="r15"]');
    let r16 = $('.listTest div input[name="r16"]');
    let r17 = $('.listTest div input[name="r17"]');
    let r18 = $('.listTest div input[name="r18"]');
    let r19 = $('.listTest div input[name="r19"]');
    let r20 = $('.listTest div input[name="r20"]');



    $('.buttonTest').click(function(){    
        radioArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20];
        let radoiButton;    
        for(let i = 0; i < radioArray.length; i++) {
            radoiButton = radioArray[x];  
        }
        let radoiButtonArray = radoiButton;
        radoiButtonArray.each(function(index, elem) {
            if(elem.checked) {
                answer.push(elem);
            }
        }); 
        $(current).not('.listQuestions20').hide("fast", function(){
            current = $(current).next('div');
            $(current).show(1000);   
                          
        });
            x++;

            if($(current).attr("class") == 'listQuestions20') {
                $('.buttonTest').css('display', 'none');
                checkAnswers();
            }

    });

    function checkAnswers() {
        for(let i =0; i < answer.length; i++) {
            if(answer[i].value == "true") {
                counter++;
            }  
        }
        showResult();
        console.log("true: " + counter);
    }

    function showResult() {
        $('.answerContainer').show();
       let pCounter = $('.answerContainer').append('<p>Правильных ответов: ' + counter + '/' + radioArray.length + '</p>');
       pCounter.css({'color':'rgb(255, 255, 255)', 'text-align':'center', 'font-size': '30px', 'font-family': '"Prata", serif'});

       switch(counter) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:  $('.answerContainer').append('<p>Ваш уровень знания английского языка: Beginner</p>');
            break;   
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: $('.answerContainer').append('<p>Ваш уровень знания английского языка: Elementary</p>');
            break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:  $('.answerContainer').append('<p>Ваш уровень знания английского языка: Pre-Intermediate</p>');
            break;
            case 16:
            case 17:
            case 18: $('.answerContainer').append('<p>Ваш уровень знания английского языка: Intermediate</p>');
            break;
            case 19:
            case 20: $('.answerContainer').append('<p>Ваш уровень знания английского языка: Advanced</p>');
            break;
       }

       let buttonEnroll = $('<a href="#footer"><button class="buttonEnroll">Записаться на бесплатный урок</button></a>');
       $('.answerContainer').append(buttonEnroll);

    }
        
});


