function mostrarAumento()
{
	let sueldo;
	let nuevoSueldo;
	let aumento;
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}
