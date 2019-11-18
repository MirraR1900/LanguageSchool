$(function() {
    $('#sendFormFreeLesson').submit(function(event) {
        event.preventDefault();
        $.post('freeLessonEn.php', $('#sendFormFreeLesson').serialize(), function(data) {
            alert("data");
        });

    });
});