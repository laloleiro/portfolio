<html>
  <head>
   <!-- <link rel="stylesheet" href="style2.css"> -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <link rel="stylesheet" media="screen" href="css/style.css">
  </head>
  <body>
  	<?php if ($_GET["OK"]) {?>
		<div class="tarjeta">
			<p class="titulo">G-0001</p>
			<p>Checin realizado con éxito.</p>
			<p>Hemos mandado confirmación a tu mail</p>
			<p>Gracias por participar en el viaje</p>
		</div>
<?php } else { ?>
	<p class="titulo">G-0001</p>
			<p>El checkin no se ha realizado.</p>
			<p>Revisa tu correo, es posible que ya estubieras registrado.</p>
			<p>Si tienes cualquier duda puedes escribirnos a: info@gravitas.space</p>
		<?php }>
  </body>
</html>