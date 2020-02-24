<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$data_send = date('Y-m-d');
$mysqli = new mysqli ('localhost','root','','school');
$mysqli->query("SET NAMES 'utf8'");
$success = $mysqli->query ("INSERT INTO `freelesson` (`firstname`, `phone`, `data_send`) 
VALUES ('$name', '$phone', '$data_send')");
echo "<script>alert($success);</script>" ;
$mysqli->close();
?>