<?php 
$mysqli = new mysqli ('localhost','root','','school');
mysqli_set_charset($mysqli, "utf8");
$result = $mysqli->query("SELECT * FROM `freelesson`");
function printRes($result) {
    echo "<table id='listFreeLesson'><tr class='headTable'><td>id</td><td>Имя</td><td>Номер телефона</td><td>Дата подачи заявки</td><td>Комментарий к записи</td></tr>";
    while(($row = $result->fetch_assoc()) !=false) {
        echo "<tr><td>".$row["id"]."</td><td class='nameNode' contenteditable='false'>".$row["firstname"]."</td><td class='phoneNode' contenteditable='false'>".$row["phone"]."</td><td>".$row["data_send"]."</td><td class='commentNode' contenteditable='false'>".$row["note"]."</td><td class='hide'><button id='".$row["id"]."delete'class='delete'>Удалить</button></td><td class='hide'><button id='".$row["id"]."edit'class='edit'>Изменить</button></td></tr>";
    }
    echo "</table>";
}
printRes($result);
$mysqli->close ();
?>