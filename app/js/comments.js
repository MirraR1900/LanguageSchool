$(function() {
    let open = $('#open');
    let flagOpenClose = true;
//     let close = $('#close');
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