<?php 
setcookie('user', $user['login'], time() - 3600, "/");
exit("<meta http-equiv='refresh' content='0; url=admin.php'>");
?>