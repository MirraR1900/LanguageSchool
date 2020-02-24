$(function() {
    // Functions responsible for adding and hiding the form for 
    // creating a comment and changing the "Leave Comments" and "Close" buttons

    let open = $('#open');
    let flagOpenClose = true;
    let createComment = $('.createComment');


    open.click (function() {
        createComment.show();
        change();
    });
    $('#buttonClose').click(function(){
        createComment.hide();
        change();
    })

    function change() {
            if(flagOpenClose === true) {
                open.css('display','none');
                $('#buttonClose').css('display','block');
                    flagOpenClose = false;
            } else {
                open.css('display','block');
                flagOpenClose = true;
                $('#buttonClose').css('display','none');
            }
    }
});