function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let acumAlcohol = 0;
	let contBarbijo = 0;
	let contJabon = 0;
	let contAlcohol = 0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let mayorTipo;
	let promedioCompra;
	let flagAlcohol = 0;
	let mensajeAlcohol = "A) No se compraron alcoholes";
	let mensajeTipo;
	let mensajeJabon;
	let i;

	for(i = 0; i < 5; i++)
	{
		tipo = prompt(`Ingrese tipo: "barbijo", "jab\u00F3n" o "alcohol"`);

		while(tipo != "barbijo" && tipo != "jab\u00F3n" && tipo != "alcohol")
		{
			tipo = prompt(`Tipo inv\u00E1lido. Ingrese tipo: "barbijo", "jab\u00F3n" o "alcohol"`);
		}

		precio = parseFloat(prompt("Ingrese precio $(100-300)"));

		while((precio < 100 || precio > 300) || isNaN(precio))
		{
			precio = parseFloat(prompt("Error. Ingrese precio $(100-300)"));
		}

		cantidad = parseInt(prompt("Ingrese cantidad (m\u00E1xima 1000)"));

		while(!(cantidad > 0 && cantidad <= 1000) || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("Error. Ingrese cantidad (m\u00E1xima 1000)"));
		}

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante");

		switch(tipo)
		{
			case "barbijo":

				acumBarbijo += cantidad;
				contBarbijo++;

				break;

			case "jab\u00F3n":

				acumJabon += cantidad;
				contJabon++;

				break;

			case "alcohol":
				
				acumAlcohol += cantidad;
				contAlcohol++;

				if(flagAlcohol == 0 || precioAlcoholBarato > precio)
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
			
					flagAlcohol = 1;
				}

				break;
		}
	}

	if(acumBarbijo > acumJabon && acumBarbijo > acumAlcohol)
	{
		mayorTipo = "barbijo";

		promedioCompra = acumBarbijo / contBarbijo;
	}

	else if(acumJabon > acumBarbijo && acumJabon >= acumAlcohol)
	{
		mayorTipo = "jab\u00F3n";

		promedioCompra = acumJabon / contJabon;
	}

	else
	{
		mayorTipo = "alcohol";

		promedioCompra = acumAlcohol / contAlcohol;
	}

	if(flagAlcohol == 1) //if(contAlcohol != 0)
	{
		mensajeAlcohol = "A) Precio alcohol barato: " + precioAlcoholBarato + 
		"\nCantidad alcohol barato: " + cantidadAlcoholBarato +
		"\nFabricante alcohol barato: " + fabricanteAlcoholBarato;
	}

	mensajeTipo = "B) Tipo con m\u00E1s unidades: " + mayorTipo + "\nPromedio por compra: " + promedioCompra;

	mensajeJabon = "C) Unidades de jabones en total: " + acumJabon;
	
	alert(mensajeAlcohol + "\n" + mensajeTipo + "\n" + mensajeJabon);
}
