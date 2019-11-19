$(function() {
let name = $('#nameInput');
let phone = $('#phoneInput');
let nameComment = $('#nameIputCom');
let email = $('#emailInputCom');
let comment = $('#textComment')
let nameInp = null;
let phoneInp;
let phoneNum = document.getElementById('phoneInput');

name.blur(function() {
    nameInp = name.val();
    if((! /^[A-Za-zА-Яа-яЁё]+$/.test(nameInp)) || nameInp === '') {
        name.css('border', '1px solid red');
    } else {
        name.css('border', '1px solid white');
    }
});

phone.blur(function() {
    phoneInp = phone.val();
    if(phoneInp === "+7"){
        phone.css('border', '1px solid red');
    } else {
        phone.css('border', '1px solid white');
        console.log(phoneInp);
        console.log(phoneInp.length);  // 16
    }
        
       
});

window.addEventListener('DOMContentLoaded', function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
function mask(event) {
    let phone = "+7(___) ___ ____",
        i = 0,
        def = phone.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = phone.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};

phoneNum.addEventListener('input', mask, false);
phoneNum.addEventListener('focus', mask, false);
phoneNum.addEventListener('blur', mask, false);

/**
 * An error appears on the Business Lunch page in the console. 
 * Because the field on the Index page is also read. There phoneClient is null
 */
if(phoneNum != null) {
    phoneNum.addEventListener('input', mask, false);
    phoneNum.addEventListener('focus', mask, false);
    phoneNum.addEventListener('blur', mask, false);
}

});
});

