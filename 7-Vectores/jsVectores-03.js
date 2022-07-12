function mostrar()
{
	let miArray = new Array();
	let i;

	for(i = 0; i < 5; i++)
	{
		miArray[i] = parseInt(prompt("Ingrese un n\u00FAmero: "));

		while(isNaN(miArray[i]))
        {
            miArray[i] = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }
	}

	for(i = 0; i < 5; i++)
	{
		document.write(`Posici\u00F3n: ${i} --> ${miArray[i]}<br>`);
	}
}
