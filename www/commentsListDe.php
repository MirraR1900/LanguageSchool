<?php
$namede = $_POST["nameCom"];
$emailde = $_POST["emailCom"];
$textde = $_POST["textCom"];
$datede = date('Y-m-d');
$mysqli = new mysqli ('localhost','root','','school');
$mysqli->query("SET NAMES 'utf8'");
$success = $mysqli->query ("INSERT INTO  `commentslistde` (`firstname`, `email`, `text_comment`, `date`) 
VALUES ('$namede', '$emailde', '$textde', '$datede')");
$mysqli->close();
   exit("<meta http-equiv='refresh' content='0; url=german.php#comments'>");
?>