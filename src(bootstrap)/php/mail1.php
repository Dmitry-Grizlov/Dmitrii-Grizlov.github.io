<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$type = $_POST["type"];
$design = $_POST["design"];
$adaptivity = $_POST["adaptivity"];
$deadline = $_POST["deadline"];
$budget = $_POST["budget"];
$name = $_POST["user_name"];
$email = $_POST["user_email"];
$message = $_POST["user_msg"];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'myubuntucloud@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '143Poison'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

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
$mail->AltBody = $email . "<br>" . $message . "<br>" . $type . "<br>" . $design . "<br>" . $adaptivity . "<br>" . $deadline . "<br>" . $budget;

if(!$mail->send()) {
    return true;
} else {
    return false;
}
?>