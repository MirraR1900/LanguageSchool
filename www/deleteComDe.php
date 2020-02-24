<?php 
$id = $_POST['id'];
$mysqli = new mysqli ('localhost','root','','school');
$mysqli->query("DELETE FROM `commentslistde` WHERE `id` = '$id'");
$mysqli->close ();
?>