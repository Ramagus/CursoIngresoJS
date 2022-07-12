function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;
	let aumento = 0;
	let descuento = 0;
	const PRECIO = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":

			if(destino == "Bariloche")
			{
				aumento = 20;
			}

			else if(destino == "Mar del Plata")
			{
				descuento = 20;
			}

			else
			{
				descuento = 10;
			}

			break;

		case "Verano":
		
			if(destino == "Bariloche")
			{
				descuento = 20;
			}

			else if(destino == "Mar del Plata")
			{
				aumento = 20;
			}

			else
			{
				aumento = 10;
			}

			break;

		case "Oto\u00F1o":
		case "Primavera":

			if(destino != "C\u00F3rdoba")
			{
				aumento = 10;
			}

			break;
	}

	if(aumento != 0)
	{
		precioFinal = PRECIO + PRECIO * aumento / 100;
	}

	else if(descuento != 0)
	{
		precioFinal = PRECIO - PRECIO * descuento / 100;
	}

	else
	{
		precioFinal = PRECIO;
	}

	alert(`Precio Final: $${precioFinal.toFixed(2)}`);
}
