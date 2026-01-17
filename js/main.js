//const boton = document.querySelector(".iconoHamburquesa");
//const nav = document.querySelector(".menuPrincipal");
function mostrarOcultarMenu(){
	document.querySelector(".menuPrincipal").classList.toggle('activo');
}


$('#intro.preload .intro-item').css("visibility", "visible");
//Banana feet clap --------------------------------
var image = [];
for(var i=1;i<40;i++){
		image[i-1]     = new Image();
		image[i-1].src = './img/feetClap/feetClap_'+i+'.png';
	}
	var indice=6;
	$('#gifs-rows').on('click', toggleClap);

	function toggleClap(){
		if(indice>=39)
			 window.location.href = "index.html";
		else{
			$('#gifs-rows').children('img').attr('src', image[indice-1].src);
			setTimeout(toggleClap, 35);
			indice++;
		}
	}
