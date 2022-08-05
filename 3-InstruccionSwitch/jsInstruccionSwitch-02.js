function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":

			alert("Falta para el Invierno");
			
			break;

		case "Julio":
		case "Agosto":
			
			alert("Abrigate que hace fr\u00EDo");
			
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			
			alert("Ya pasamos el fr\u00EDo. Ahora calor!!!");

			break;
	}
}
