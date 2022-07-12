function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":

			alert("Oeste");

			break;

		case "Cataratas":

			alert("Norte");

			break;

		case "Mar del Plata":

			alert("Este");

			break;

		case "Ushuaia":

			alert("Sur");

			break;
	}
}
