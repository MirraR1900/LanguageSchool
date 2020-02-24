<?php
$name = $_POST["nameCom"];
$email = $_POST["emailCom"];
$text = $_POST["textCom"];
$date = date('Y-m-d');
$mysqli = new mysqli ('localhost','root','','school');
$mysqli->query("SET NAMES 'utf8'");
$success = $mysqli->query ("INSERT INTO `commentsList` (`firstname`, `email`, `text_comment`, `date`) 
VALUES ('$name', '$email', '$text', '$date')");
$mysqli->close();
exit("<meta http-equiv='refresh' content='0; url=index.php#comments'>");
?>
