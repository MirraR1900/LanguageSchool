$(function() {
    $('#commentAdultEn').submit(function(event) {
        event.preventDefault();
        $.post('commentAdultEn.php', $('#commentAdultEn').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentPupilsEn').submit(function(event) {
        event.preventDefault();
        $.post('../commentPupilsEn.php', $('#commentPupilsEn').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentPreschoolersEn').submit(function(event) {
        event.preventDefault();
        $.post('../commentPreschoolersEn.php', $('#commentPreschoolersEn').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentExamsEn').submit(function(event) {
        event.preventDefault();
        $.post('../commentExamsEn.php', $('#commentExamsEn').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentAdultDe').submit(function(event) {
        event.preventDefault();
        $.post('../commentGerman.php', $('#commentAdultDe').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentPupilsDe').submit(function(event) {
        event.preventDefault();
        $.post('../commentPupilsDe.php', $('#commentPupilsDe').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentPreschoolersDe').submit(function(event) {
        event.preventDefault();
        $.post('../commentPreschoolersDe.php', $('#commentPreschoolersDe').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });

    $('#commentExamsDe').submit(function(event) {
        event.preventDefault();
        $.post('../commentExamsDe.php', $('#commentExamsDe').serialize(), function() {
            alert("Запрос успешно отправлен!");
        });
    });
});