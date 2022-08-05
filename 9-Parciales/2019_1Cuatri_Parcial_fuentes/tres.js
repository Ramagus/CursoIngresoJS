function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let montoDescuento;
    let precioFinal;

    precio = parseFloat(prompt("Ingrese el precio"));
    porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento"));

    montoDescuento = precio * porcentajeDescuento / 100;

    precioFinal = precio - montoDescuento;
    
    document.getElementById("elPrecioFinal").value = precioFinal;
}
