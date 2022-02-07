<?php
    $tel = $_GET['tel'];
    $tel = htmlspecialchars($tel);
    $tel = urldecode($tel);
    $tel = trim($tel);
    $tel = preg_replace('/[^0-9+]/', '', $tel);

    if ($tel != '') {
        if (mail("ukrteplica@gmail.com", "Получение расчета", 
        "Получение расчета\r\n\r\nТелефон: +380".$tel."\r\n\r\nДата: ".date("d.m.y")."\r\nВремя: ".date("H:i:s"),
        "From: ukrteplica@gmail.com \r\n")){  
               echo "true";
        }
        else{
            echo "false";
        }
    }
    else{
        echo "false";
    }
?>