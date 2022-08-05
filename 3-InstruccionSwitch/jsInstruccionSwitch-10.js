function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let flag = 0;

	switch(estacion)
	{
		case "Invierno":

			if(destino == "Bariloche")
			{
				flag = 1;
			}

			break;

		case "Verano":
		
			if(destino == "Mar del Plata" || destino == "Cataratas")
			{
				flag = 1;
			}

			break;

		case "Oto\u00F1o":

			flag = 1;

			break;

		case "Primavera":

			if(destino != "Bariloche")
			{
				flag = 1;
			}

			break;
	}

	if(flag == 1)
	{
		alert("Se viaja");
	}

	else
	{
		alert("No se viaja");
	}
}
