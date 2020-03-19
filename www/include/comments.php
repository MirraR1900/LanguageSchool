<div class="comments" id="comments">
<div class="headlineLeft">
<p>Отзывы наших учеников</p>
</div>
<div id="contentCom"><div class="showComments"></div></div>
<div class="openCloseCreateComment">
<button id="open">Оставить отзыв</button>
<button id="buttonClose">X</button>
</div>
<div class="createComment">
<form action="commentsList.php" method="POST" id="comment">
<fieldset>
<legend>Оставьте ваш отзыв о школе</legend>
<label for="">Имя</label><br>
<input type="text" id="nameIputCom" name="nameCom" pattern="[A-Za-zА-Яа-яЁё]{1,20}" required><br>
<label for="">E-mail</label><br>
<input type="email" id="emailInputCom" name="emailCom" placeholder="ivanov@mail.ru" required><br>
<textarea type="text" id="textComment" name="textCom" required></textarea>
</fieldset>
<button type="submit">Отправить</button>
</form>
</div>
</div>