<?php 
if (!empty($_POST['name']) AND !empty($_POST['phone'])){
    $headers = 'From: <fishka@gmail.com>' .
                'Reply-To: groupby@ormedia.by\r\n' .
                'X-Mailer: PHP/' . phpversion();
         
    $theme = "Новая заявка с сайта ormedia.by";             
             
    $letter = "Данные сообщения:";
    $letter .="\n\n";
    $letter .="Имя: ".$_POST['name'];
    $letter .="\nТелефон: ".$_POST['phone'];
    $letter .="\n\n";
    $letter .="\nКурс по фронтенду: ".$_POST['front'];
    $letter .="\nКурс по Phyton/Jango: ".$_POST['phyton'];
    $letter .="\nКурс по веб-дизайну: ".$_POST['webdes'];
    $letter .="\nКурс по английскому языку для IT: ".$_POST['engljava'];
    $letter .="\nКурс по JAVA: ".$_POST['java'];
    $letter .="\nКурс по маркетингу: ".$_POST['market'];
    $letter .="\n\n";
    $letter .="\nО себе: ".$_POST['message'];
    
    if (mail("<babskij@yandex.com>", $theme, $letter, $headers)){
        echo "Сообщение отправлено!";
  } else {
        echo "Ошибка при отправке!";
  }
} else {
    echo "Ошибка: Заполните все поля!";
}