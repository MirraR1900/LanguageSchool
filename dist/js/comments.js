$(function() {

    // Functions responsible for adding and hiding the form for 
    // creating a comment and changing the "Leave Comments" and "Close" buttons

    let open = $('#open');
    let flagOpenClose = true;
    let createComment = $('.createComment');


    open.click (function() {
        createComment.toggle();
        change()
    });

    function change() {
            if(flagOpenClose === true) {
                open.text("Закрыть");
                flagOpenClose = false;
            } else {
                open.text("Оставить отзыв");
                flagOpenClose = true;
            }
    }
});