<?php header('Content-Type: text/html; charset=utf-8');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/admin.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <title>Вход в панель администратора</title>
</head>
<body>
    <div class="wrapper">
        <?php 
        if($_COOKIE['user'] == ''):
        ?>
        <form action="singIn.php" id="singIn" method="POST">
            <h1>Вход в панель администратора</h1>
            <fieldset>
                <label for="login">Login</label><br>
                <input type="text" name="login" /><br>
                <label for="password">Password</label><br>
                <input type="text" name="password" /><br>
                <button type="submit" id="btnSingIn">Sing in</button>
            </fieldset>
        </form>
        <?php else:?>
            <p class="titleAdmin">Пользователь:  <?=$_COOKIE['user']?><a href="/exit.php"><button id="btnAdmin">Выйти из панели</button></a></p>
            <div class="freelesson">
                <h2>Запись на бесплатный урок</h2>
                <button id="editFreeLesson">Редактировать</button>
                <div class="listPeople"></div>
            </div>
            <div class="commentsEn">
            <h2>Комментарии со страницы Английский язык</h2>
            <button id="editCommentEn">Редактировать</button>
                <div class="listCommentsEn"></div>
            </div>
            <div class="commentsDe">
            <h2>Комментарии со страницы Немецкий язык</h2>
                <button id="editCommentDe">Редактировать</button>
            <div class="listCommentsDe"></div>
            </div>
        <?php endif;?>
        <script src="../js/admin.js"></script>
    </div>
</body>
</html>