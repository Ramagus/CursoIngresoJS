function mostrar()
{
    const PRECIO_UNIDAD = 100;
    let continente;
    let cantidadDias;
    let pago;
    let precioInicial;
    let descuento = 0;
    let recargo = 0;
    let montoDescuento;
    let montoRecargo;
    let precioFinal;

    continente = document.getElementById("Continente").value;

    cantidadDias = parseInt(prompt("Ingrese la cantidad de d\u00EDas"));

    while(cantidadDias <= 0)
    {
        cantidadDias = parseInt(prompt("Error. Ingrese una cantidad v\u00E1lida"));
    }

    pago = document.getElementById("Pago").value;
    
    precioInicial = PRECIO_UNIDAD * cantidadDias;

    switch(continente)
    {
        case "Am\u00E9rica":

            descuento = 15;

            switch(pago)
            {
                case "D\u00E9bito":

                    descuento += 10;

                    break;    
            }

            break;

        case "\u00C1frica":
        case "Ocean\u00EDa":

            descuento = 30;

            switch(pago)
            {
                case "MercadoPago":
                case "Efectivo":

                    descuento += 15;

                    break;    
            }

            break;

        case "Europa":

            descuento = 20;

            switch(pago)
            {
                case "D\u00E9bito":

                    descuento += 15;

                    break;

                case "MercadoPago":

                    descuento += 10;

                    break;

                default:

                    descuento += 5;

                    break;
            }

            break;

        default:

            recargo = 20;
    }

    switch(pago)
    {
        case "Cheque":

            recargo += 15;

            break;
    }

    if(descuento > 0)
    {
        montoDescuento = precioInicial * descuento / 100;

        precioFinal = precioInicial - montoDescuento;
    }

    else if(recargo > 0)
    {
        montoRecargo = precioInicial * recargo / 100;
        
        precioFinal = precioInicial + montoRecargo;
    }

    alert(`Precio Final: $${precioFinal}`);
}
