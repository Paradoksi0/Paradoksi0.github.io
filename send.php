<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userfirst = $_POST['userfirst'];
    $usersec = $_POST['usersec'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    // Адрес, на который будет отправлено письмо
    $to = "contact@builderbros.co.uk";
    
    // Тема письма
    $subject = "Новая заявка с сайта";
    
    // Содержимое письма
    $message = "fisrt name: " . $userfirst . "\n";
    $message .= "Телефон: " . $usersec . "\n";
    $message .= "Телефон: " . $email . "\n";
    $message .= "Телефон: " . $phone . "\n";
    
    // Дополнительные заголовки
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    mail($to, $subject, $message, $headers);
    
    // Перенаправление обратно на страницу формы после отправки письма
    header("Location: index.html");
    exit;
}
?>