<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$mes = $_POST['mes'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$mes = htmlspecialchars($mes);

$fio = urldecode($fio);
$email = urldecode($email);
$mes = urldecode($mes);

$fio = trim($fio);
$email = trim($email);
$mes = trim($mes);

mail("shinjitsu1991@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email.". "Сообщение:".$mes. ,"From: example2@mail.ru \r\n");

if(mail("shinjitsu1991@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email.". "Сообщение:".$mes. ,"From: example2@mail.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}
?}>