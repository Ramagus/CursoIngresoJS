function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	
	alert(`Usted se llama ${nombre} y tiene ${edad} a\u00F1os`);
}
