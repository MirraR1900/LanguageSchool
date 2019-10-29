$(function() {
    let open = $('#open');
    let close = $('#close');
    let createComment = $('.createComment');

    open.click (function() {
            createComment.css('display', 'block');
            open.css('display', 'none');
            close.css('display', 'block');
    });

    close.click(function() {
            createComment.css('display', 'none');
            open.css('display', 'block');
            close.css('display', 'none');
    });
});