function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
		
			alert("Tiene 28 d\u00EDas");
			
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			
			alert("Tiene 30 d\u00EDas");

			break;
		
		default:
		
			alert("Tiene 31 d\u00EDas");
	}
}
