function mostrarDescuento()
{
	let importe;
	let importeFinal;
	let descuento;
	
	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	importeFinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;
}
