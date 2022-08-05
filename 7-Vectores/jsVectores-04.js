function mostrar()
{
	let miArray = new Array();
	let acum = 0;
	let i;

	for(i = 0; i < 5; i++)
	{
		miArray[i] = parseInt(prompt("Ingrese un n\u00FAmero: "));

		while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Solo n\u00FAmeros"));
		}
		
		acum += miArray[i];
	}

	for(i = 0; i < 5; i++)
	{
		document.write(`Posici\u00F3n: ${i} --> ${miArray[i]}<br>`);
	}

	document.write(`<h1>La suma de todos los n\u00FAmeros es: ${acum}</h1>`);
}
