<?php
    $teplitsaName = $_GET['teplitsaName'];
    $teplitsaName = htmlspecialchars($teplitsaName);
    $teplitsaName = urldecode($teplitsaName);
    $teplitsaName = trim($teplitsaName);

    $tel = $_GET['tel'];
    $tel = htmlspecialchars($tel);
    $tel = urldecode($tel);
    $tel = trim($tel);
    $tel = preg_replace('/[^0-9+]/', '', $tel);

    $price = $_GET['price'];
    $price = htmlspecialchars($price);
    $price = urldecode($price);
    $price = trim($price);

    $size = $_GET['size'];
    $size = htmlspecialchars($size);
    $size = urldecode($size);
    $size = trim($size);

    $depth = $_GET['depth'];
    $depth = htmlspecialchars($depth);
    $depth = urldecode($depth);
    $depth = trim($depth);


    if($tel != ''){
        if (mail("ukrteplica@gmail.com", "Оформление заказа", 
        "".$teplitsaName."\r\nРазмер: ".$size."\r\nТолщина: ".$depth."\r\nЦена: ".$price."\r\n\r\nТелефон: +380".$tel."\r\n\r\nДата: ".date("d.m.y")."\r\nВремя: ".date("H:i:s"),
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