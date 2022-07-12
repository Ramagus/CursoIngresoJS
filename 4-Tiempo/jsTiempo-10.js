let tiempoInicio;
let tiempoFinal;
let resultado;

function inicio()
{
	let random = Math.floor(Math.random() * 12000 + 2000);

	alert("function inicio");

	setTimeout(segundosEnElAire, random);
}

function segundosEnElAire()
{
	document.getElementById("secreto").style.visibility = "visible"; 

	tiempoInicio = new Date();

 	tiempoInicio = tiempoInicio.getTime();
}

function contarMilisegundos()
{
	tiempoFinal = new Date();

	tiempoFinal = tiempoFinal.getTime();

	resultado = tiempoFinal - tiempoInicio;

	if(resultado >= 0 && resultado <= 500)
	{
		alert(`Usted es Flash. Tiempo: ${resultado}`);
	}

	else if(resultado >= 501 && resultado <= 1000)
	{
		alert(`Bien ah\u00ED, segu\u00ED practicando. Tiempo: ${resultado}`);	
	}

	else if(resultado >= 1001 && resultado <= 3000)
	{
		alert(`Tenemos los deditos duros???. Tiempo: ${resultado}`);
	}

	else
	{
		alert(`Te quedaste dormido???. Tiempo: ${resultado}`);
	}	
}
