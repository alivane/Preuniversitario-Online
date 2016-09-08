
$('.fondo1').add('.fondo2').add('.fondo3').hide()
myFunction()
	function cambiarFondo(){
		$('.fondo1').show();
		$('.fondo2').add('.fondo3').add('.fondo').hide()
		console.log("2")
	}
	function cambiarFondo1(){
		$('.fondo2').show();
		$('.fondo1').add('.fondo3').add('.fondo').hide()
		console.log("3")
	}
	function cambiarFondo2(){
		$('.fondo3').show();
		$('.fondo1').add('.fondo2').add('.fondo').hide()
		console.log("4")
	}
	function cambiarFondo3(){
		$('.fondo').show();
		$('.fondo1').add('.fondo2').add('.fondo3').hide()
		console.log("1")
	}
	var nuevoFondo;
	function myFunction(){
		nuevoFondo = setInterval(cambiarFondo,4000);
		nuevoFondo = setInterval(cambiarFondo1,8000);
		nuevoFondo = setInterval(cambiarFondo2,12000);
		nuevoFondo = setInterval(cambiarFondo3,16000);
	}