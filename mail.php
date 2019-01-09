<?php 
if (!empty($_POST['name']) AND !empty($_POST['phone'])){
    $headers = 'From: <babskij2015@gmail.com>' .
                'Reply-To: groupby@ormedia.by\r\n' .
                'X-Mailer: PHP/' . phpversion();
         
    $theme = "Новая заявка с сайта ormedia.by";             
             
    $letter = "Данные сообщения:";
    $letter .="\n\n";
    $letter .="Имя: ".$_POST['name'];
    $letter .="\nТелефон: ".$_POST['phone'];
    $letter .="\nКурс: ".$_POST['front'];
    $letter .="\nО себе: ".$_POST['message'];
    
    if (mail("<babskij@yandex.com>", $theme, $letter, $headers)){
        echo "Сообщение отправлено!";
  } else {
        echo "Ошибка при отправке!";
  }
} else {
    echo "Ошибка: Заполните все поля!";
}