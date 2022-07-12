function mostrar()
{
	let estado;
	let edad;

	estado = document.getElementById("estadoCivil").value;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(!(estado != "Soltero") && edad >= 18)
	//if(!(estado != "Soltero" || edad < 18))
	//if(estado == "Soltero" && edad >= 18)
	{
		alert("Es soltero y no es menor");
	}
}
