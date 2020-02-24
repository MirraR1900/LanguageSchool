$(function() {
    $('#sendFormFreeLesson').submit(function(event) {
        event.preventDefault();
        $.post('freeLesson.php', $('#sendFormFreeLesson').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });

    });
});