function sumar() 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert(`La suma es $${suma.toFixed(2)}`);
}

function promedio() 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    promedio = suma / 3;

    alert(`El promedio es $${promedio.toFixed(2)}`);
}

function precioFinal() 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let importeFinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    iva = suma * 21 / 100;

    importeFinal = suma + iva;

    alert(`El importe IVA incluido es $${importeFinal.toFixed(2)}`);
}
