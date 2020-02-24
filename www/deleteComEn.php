<?php 
$id = $_POST['id'];
$mysqli = new mysqli ('localhost','root','','school');
$mysqli->query("DELETE FROM `commentslist` WHERE `id` = '$id'");
$mysqli->close ();
?>