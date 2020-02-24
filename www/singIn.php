<?php 
$login = filter_var(trim($_POST['login']),
FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);
$mysqli = new mysqli ('localhost','root','','school');
$res = $mysqli->query("SELECT * FROM `users` WHERE `login` = '$login'  AND `password` = '$password'");
$user = $res->fetch_assoc();
if(count($user) == 0) {
    echo "Not find user.";
    exit();
}
setcookie('user', $user['login'], time() + 3600);
$mysqli->close();
exit("<meta http-equiv='refresh' content='0; url=admin.php'>");
?>