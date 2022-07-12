function mostrar()
{
	let miArray = new Array();
	let i;

	miArray[0] = 5;
	miArray[1] = 74;
	miArray[2] = 8;
	miArray[3] = 94;
	miArray[4] = 5;
	miArray[5] = 0;
	miArray[6] = 80;
	miArray[7] = 789;
	miArray[8] = 5;
	miArray[9] = 7;

	document.write("El contenido del vector es:<br><br>");

	for(i = 0; i < 10; i++)
	{
		document.write(`Posici\u00F3n: ${i} --> ${miArray[i]}<br>`);
	}
}
