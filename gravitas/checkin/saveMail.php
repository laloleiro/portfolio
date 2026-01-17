<?php
$link = mysqli_connect("gravitaswsequipo.mysql.db", "gravitaswsequipo", "PerroVerde1", "gravitaswsequipo");
if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;  
    exit;
}
/*
echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;
*/
$query="INSERT INTO Pasajeros(nombre, mail,checkinDate) VALUES ('".$_POST["nombre"]."','".$_POST["mail"]."',CURDATE())";
$resultado = mysqli_query($link,$query);
$resp = "KO";
if ($resultado){
	$resp = "OK";
	//mandar Mail
   /* //------
    $to = $_POST['mail']; // note the comma
    
    // Subject
    $subject = 'Check in realizado con éxito';
    
    // Message
    $message = '
    <html>
    <head>
    <title>Checkin IN:GRAVITAS</title>
    </head>
    <body>
    <p>Muchas gracias por realizar el checkin</p>
    <p>El viaje ya ha comenzado.<br/>Descárgate la app PUKKA FUN y empieza a jugar mirando el reverso de tu invitación</p>
    <p>Gracias por hacer posible este viaje.<br>Nos vemos el lunes 8 de Abril</p>
    </body>
    </html>
    ';
    
    // To send HTML mail, the Content-type header must be set
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    
    // Additional headers
    $headers[] = 'From: Gravitas <info@gravitas.space>';
    
    // Mail it
    mail($to, $subject, $message, implode("\r\n", $headers));
    //mandar Mail
    */
}
mysqli_close($link);
header('Location:back.php?res='.$resp); 
?>