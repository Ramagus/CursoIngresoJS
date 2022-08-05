function calcularPrecio() 
{
    const PRECIO = 35;
    let cantidad;
    let marca;
    let descuento;
    let importeFinal;
    let iibb;
    let precioConDescuento;
    let mensaje;
    let flag = false;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if(cantidad <= 0 || isNaN(cantidad))
    {
        alert("Error. Ingrese una cantidad v\u00E1lida");
    }

    else
    {
        switch(cantidad)
        {
            case 1:
            case 2:

                descuento = 0;

                break;

            case 3:

                if(marca == "ArgentinaLuz")
                {
                    descuento = 15;
                }
    
                else if(marca == "FelipeL\u00E1mparas")
                {
                    descuento = 10;
                }
    
                else
                {
                    descuento = 5;
                }

                break;

            case 4:

                if(marca == "ArgentinaLuz" || marca == "FelipeL\u00E1mparas")
                {
                    descuento = 25;
                }
    
                else
                {
                    descuento = 20;
                }
    
                break;

            case 5:

                if(marca == "ArgentinaLuz")
                {
                    descuento = 40;
                }
    
                else
                {
                    descuento = 30;
                }

                break;

            default:

                descuento = 50;
        }

        precioConDescuento = PRECIO - PRECIO * descuento / 100;

        document.getElementById("txtIdPrecioDescuento").value = precioConDescuento;

        importeFinal = precioConDescuento * cantidad;

        if(importeFinal > 120)
        {
            iibb = importeFinal * 10 / 100;

            importeFinal += iibb;

            flag = true;
        }

        mensaje = `Total: $${importeFinal.toFixed(2)}`;

        if(flag == true)
        {
            mensaje += `\nUsted pag\u00F3 $${iibb.toFixed(2)} de Ingresos Brutos`;
        }

        alert(mensaje);
    }
}
