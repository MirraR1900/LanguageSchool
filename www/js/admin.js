$(function() {
    let btnFreeLesson = true;
    let btnCommentEn = true;
    let btnCommentDe = true;

  
    $('.listPeople').load('showListfreelesson.php');
    $('.listCommentsEn').load('showListCommentsEn.php');
    $('.listCommentsDe').load('showListCommentsDe.php');

    $('.listPeople').click(getButton);
    $('.listCommentsEn').click(getButton);
    $('.listCommentsDe').click(getButton);

    $('#editFreeLesson').click( function() {
        if(btnFreeLesson) {
            $('.hide').show();
            $('#editFreeLesson').text("Закрыть");
            $('.nameNode').attr('contenteditable', 'true');
            $('.phoneNode').attr('contenteditable', 'true');
            $('.commentNode').attr('contenteditable', 'true');
            btnFreeLesson = false;
        } else {
            $('.hide').hide();
            $('#editFreeLesson').text("Редактировать");
            $('.nameNode').attr('contenteditable', 'false');
            $('.phoneNode').attr('contenteditable', 'false');
            $('.commentNode').attr('contenteditable', 'false');
            btnFreeLesson = true;
        }
    });
    $('#editCommentEn').click( function() {
        if(btnCommentEn) {
            $('.hideEn').show();
            $('#editCommentEn').text("Закрыть");
            btnCommentEn = false;
        } else {
            $('.hideEn').hide();
            $('#editCommentEn').text("Редактировать");
            btnCommentEn = true;
        }
    });
    $('#editCommentDe').click( function() {
        if(btnCommentDe) {
            $('.hideDe').show();
            $('#editCommentDe').text("Закрыть");
            btnCommentDe = false;
        } else {
            $('.hideDe').hide();
            $('#editCommentDe').text("Редактировать");
            btnCommentDe = true;
        }
    });

    function getButton(event) {
        let target = event.target;
        let targetID;
        let targetClass;
        let tableID;
        let name;
        let phone;
        let comment;
        let obj;
        let file;

        if(target.tagName == "BUTTON") {
            targetID = target.getAttribute('id');
            targetClass = target.getAttribute('class');
            let parentTarget = target.parentNode;
            let targetTR = parentTarget.parentNode;
            let tbody = targetTR.parentNode;
            let table = tbody.parentNode;
            tableID = table.getAttribute('id');
            console.log(tableID);
            for(let elem of targetTR.children) {
                switch(elem.getAttribute('class')) {
                    case 'nameNode': name = elem.textContent;
                    break;
                    case 'phoneNode': phone = elem.textContent;
                    break;
                    case 'commentNode': comment = elem.textContent;
                    break;
                }
            } 

            if(targetClass == 'edit') {
                obj = {
                    'id': targetID, 
                    'name' : name,
                    'phone': phone,
                    'comment': comment,
                }
            } else {
                obj = {
                    'id': targetID, 
                }
            }
        }

        if(tableID == 'listFreeLesson') {
            file = 'editDeleteFreeLes.php'
        } else if(tableID == 'listCommentsEn') {
            file = 'deleteComEn.php';
        } else {
            file = 'deleteComDe.php';
        }

        $.post(file, obj);
        if(targetClass == 'delete') {
            if(tableID == 'listFreeLesson') {
                $('.listPeople').load('showListfreelesson.php');
            } else if(tableID == 'listCommentsEn') {
                $('.listCommentsEn').load('showListCommentsEn.php');
            } else {
                $('.listCommentsDe').load('showListCommentsDe.php');
            }
        }
    }
});