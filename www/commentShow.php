<?php 
$mysqli = new mysqli ('localhost','root','','school');
mysqli_set_charset($mysqli, "utf8");
$result = $mysqli->query("SELECT `firstname`,`text_comment`, `date` FROM `commentslist`");
printRes($result);

function printRes($result) {
    while(($row = $result->fetch_assoc()) !=false) {
        echo "<div class='contentComment'><p class='nameUser'>" . $row["firstname"]. "</p>";
        echo  "<p class='textComment'>" . $row["text_comment"]."</p>";
        echo "<p class='dateParg'>Размещен: <label class='dateComent'>".$row["date"]."</label></p></div>";
    }
}
$mysqli->close ();
?>