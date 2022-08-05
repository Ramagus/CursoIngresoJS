let miIntervalo;

function inicio()
{
	alert("function inicio");

	miIntervalo = setInterval(segundosEnElAire, 3000);
}

function segundosEnElAire()
{
    alert("Bienvenido a la UTN FRA");
}

function fin()
{
	clearTimeout(miIntervalo);
	
	alert("function fin");
}
