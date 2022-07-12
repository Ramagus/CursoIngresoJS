let miIntervalo;
let contador = 0;

function inicio()
{
	alert("function inicio");

	miIntervalo = setInterval(segundosEnElAire, 2000);
}

function segundosEnElAire()
{
	contador++;

    alert(`Bienvenido a la UTN FRA. Cantidad: ${contador}`);
}

function fin()
{
	clearInterval(miIntervalo);
	
	alert("function fin");
}
