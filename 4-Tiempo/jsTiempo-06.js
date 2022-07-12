let miTemporizador;

function inicio()
{
	alert("function inicio");

	document.getElementById("secreto").style.visibility = "hidden";

	miTemporizador = setTimeout(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
	document.getElementById("secreto").style.visibility = "visible";

    alert("Bienvenido a la UTN FRA");
}

function fin()
{
	clearTimeout(miTemporizador);

	alert("function fin");
}
