<div class="include">
    <div class="navigationEnglish">
     <ul class="navigationList">
      <li class="visible"><button id="<?=$adult?>">Для взрослых</button></li>
      <li class="hidden"><button id="<?=$pupils?>">Для школьников</button></li>
      <li class="hidden"><button id="<?=$preschoolers?>">Для дошкольников</button></li>
      <li class="hidden"><button id="<?=$exam?>">Подготовка к экзаменам</button></li>
     </ul>
    </div>
<div id="contentPage"></div>
</div>
<div>
<?php require "include/reasons.php";
      require "include/freelesson.php";
      require "include/comments.php";
    ?>
</div>