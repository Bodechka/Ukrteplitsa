<?php
    $tel = $_GET['tel'];
    $tel = htmlspecialchars($tel);
    $tel = urldecode($tel);
    $tel = trim($tel);
    $tel = preg_replace('/[^0-9+]/', '', $tel);

    $dealerName = $_GET['dealerName'];
    $dealerName = htmlspecialchars($dealerName);
    $dealerName = urldecode($dealerName);
    $dealerName = trim($dealerName);

    $dealerMail = $_GET['dealerMail'];
    $dealerMail = htmlspecialchars($dealerMail);
    $dealerMail = urldecode($dealerMail);
    $dealerMail = trim($dealerMail);


    if (($tel != '') && ($dealerName != '') && ($dealerMail != '')) {
        if (mail("ukrteplica@gmail.com", "Заявка от дистрибьютера", 
        "Телефон: +380".$tel."\r\nИмя: ".$dealerName."\r\nПочта: ".$dealerMail."\r\n\r\nДата: ".date("d.m.y")."\r\nВремя: ".date("H:i:s"),
        "From: ukrteplica@gmail.com \r\n")){     
            echo "true";
        } else {
            echo "false";
        }
    }
    else{
        echo "false";
    }
?>