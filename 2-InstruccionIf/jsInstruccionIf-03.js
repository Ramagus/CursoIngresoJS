function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 18)
	{
		alert("Es menor de edad");
	}

	else
	{
		alert("Es mayor de edad");
	}
}
