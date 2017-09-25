<?php 
 
$sendto   = "";
$username = $_POST['name'];
$usermail = $_POST['email'];
 
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Выслать каталог</h2>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "</body></html>";
 
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<center><img src='img/spasibo.png'></center>";
} else {
    echo "<center><img src='img/ne-tpravleno.png'></center>";
}
 
?>