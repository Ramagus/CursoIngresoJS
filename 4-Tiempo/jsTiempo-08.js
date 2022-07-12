let tiempoInicio;
let tiempoFinal;
let resultado;

function inicio()
{
	alert("function inicio");

	document.getElementById("secreto").style.visibility = "hidden";

	setTimeout(segundosEnElAire, 3000);
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

	alert(`Su tiempo fue: ${resultado}`);
}
