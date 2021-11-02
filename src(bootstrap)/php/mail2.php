<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['usr_name'];
$email = $_POST['usr_email'];
$message = $_POST['usr_msg'];

$mail->setFrom('myubuntucloud@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('business.dmitry.grizlov@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' . $name . ' оставил заявку!';
$mail->AltBody = $message;

if(!$mail->send()) {
    return true;
} else {
    return false;
}
?>