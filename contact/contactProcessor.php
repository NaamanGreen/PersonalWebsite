<?php
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $formcontent=" From: $name \n Company: $company \n Message: $message";
    $recipient = "ng@naamangreen.com";
    $subject = "Contact Form - NaamanGreen.com";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!" . " -" . "<a href='../' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>