<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = $email;
  $subject = 'Xác nhận liên hệ';
  $body = "Chào $name,\n\nCảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ trả lời sớm nhất có thể!\n\nNội dung tin nhắn của bạn:\n$message";
  $headers = "From: your-email@example.com" . "\r\n" . "Reply-To: your-email@example.com" . "\r\n" . "X-Mailer: PHP/" . phpversion();
  if (mail($to, $subject, $body, $headers)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>
