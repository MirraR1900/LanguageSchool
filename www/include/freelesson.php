<div class="formfreeLesson" id="formfreeLesson">
<p class="headlineLeft">Запишитесь на бесплатный урок</p>
<div class="containerForm">
<form action="freeLesson.php" id="sendFormFreeLesson" method="POST">
<fieldset>
<legend>Запись на бесплатный урок</legend>
<label for="name">Имя </label><br>
<input type="text" id="nameInput" name="name" pattern="[A-Za-zА-Яа-яЁё]{1,20}" required><br>
<label for="phone">Телефон </label><br>
<input type="tel" id="phoneInput" name="phone" required><br>
 </fieldset>
<button type="submit" class="btnSend">Отправить</button>
</form>
</div>
</div>