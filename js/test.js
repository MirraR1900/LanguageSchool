$(function() {
    let current =  $('.listTest div').first();

    $('.buttonTest').click(function(){
        $(current).not('.listQuestions10').hide("fast", function(){
            current = $(current).next('div');
            $(current).show(1000);
        });
    });

});

function run() {
    let radio = document.getElementsByName('r1');
    for (var i=0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Выбран '+i+' radiobutton');
        }
    }
};

    run();