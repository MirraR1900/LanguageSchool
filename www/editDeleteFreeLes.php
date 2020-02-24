<?php 
$id = $_POST['id'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$mysqli = new mysqli ('localhost','root','','school');
mysqli_set_charset($mysqli, "utf8");
    if($id !='' && $name != '' && $phone != '') {
        $mysqli->query("UPDATE `freelesson` SET `firstname` = '$name', `phone` = '$phone', `note` = '$comment' WHERE `id` ='$id'");
    } else {
        $mysqli->query("DELETE FROM `freelesson` WHERE `id` = '$id'");
    }
$mysqli->close ();
?>