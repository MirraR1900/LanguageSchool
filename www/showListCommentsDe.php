<?php 
$mysqli = new mysqli ('localhost','root','','school');
mysqli_set_charset($mysqli, "utf8");
$resultDe = $mysqli->query("SELECT * FROM `commentslistde`");
function printResDe($resultDe) {
    echo "<table id='listCommentsDe' class='border'><tr class='headTable'><td class='tdHeigth'>id</td><td class='tdHeigth'>Имя</td><td class='tdHeigth'>Email</td><td class='tdHeigth'>Текст комментария</td><td class='tdHeigth'>Дата публикации</td></tr>";
    while(($row = $resultDe->fetch_assoc()) !=false) {
        echo "<tr><td class='height'>".$row["id"]."</td><td class='height'>".$row["firstname"]."</td><td class='height'>".$row["email"]."</td><td class='height'>".$row["text_comment"]."</td><td class='height'>".$row["date"]."</td><td class='hideDe'><button id='".$row["id"]."' class='delete'>Удалить</button></td></tr>";
    }
    echo "</table>";
}

printResDe($resultDe);

$mysqli->close ();
?>