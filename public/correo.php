<?php
//llamando variables
$name = $_POST['name'];   
$email = $_POST['email'];   
$cel = $_POST['cel'];   
$message = $_POST['message'];
//Datos para el correo
$destinatario = 'adolfozuazo258@gmail.com';
$asunto = 'Mensaje de interesado MKD';

$correo = "De: $name \n";
$correo .= "Correo: $email \n";
$correo .= "Telefono: $cel \n";
$correo .= "Mensaje: $message";

//Enviar mensaje
mail($destinatario, $asunto, $correo);
header('Location:index.html');
?>