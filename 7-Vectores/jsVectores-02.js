function mostrar()
{
	let miArray = new Array();
	let i;

	miArray[0] = "Juan";
	miArray[1] = "Luis";
	miArray[2] = "Mar\u00EDa";
	miArray[3] = "Nahuel";
	miArray[4] = "Yolanda";

	document.write("El contenido del vector es:<br><br>");

	for(i = 0; i < 5; i++)
	{
		document.write(`Posici\u00F3n: ${i} --> ${miArray[i]}<br>`);
	}
}
