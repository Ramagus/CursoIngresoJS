function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let acumPrecios = 0;
  let descuento = 0;
  let importeConDesc;
  let flagCant = 0;
  let flagPrecio = 0;
  let tipoMasCantidad;
  let tipoMasCaro;
  let mensajeImporte;
  let mensajeDesc = "B) No hay descuento";
  let mensajeTipoMasCant;
  let mensajeTipoMasCaro;

  do
  {
    tipo = prompt("Ingrese tipo");

    while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt("Error. Ingrese tipo");
    }

    cantidad = parseInt(prompt("Ingrese cantidad"));

    while(cantidad <= 0 || isNaN(cantidad))
    {
      cantidad = parseInt(prompt("Error. Ingrese cantidad"));
    }

    precio = parseFloat(prompt("Ingrese precio"));

    while(precio <= 0 || isNaN(precio))
    {
      precio = parseFloat(prompt("Error. Ingrese precio"));
    }

    acumPrecios += precio;

    if(flagCant == 0 || cantidad > tipoMasCantidad)
    {
      tipoMasCantidad = cantidad;
      flagCant = 1;
    }

    if(flagPrecio == 0 || precio > tipoMasCaro)
    {
      tipoMasCaro = precio;
      flagPrecio = 1;
    }

    respuesta = confirm("¿Desea continuar?");

  } while(respuesta);

  if(cantidad > 10 && cantidad <= 30)
  {
    descuento = 15;
  }

  else if(cantidad > 30)
  {
    descuento = 25;
  }

  mensajeImporte = `A) Importe total sin descuento: ${acumPrecios}`;

  if(descuento > 0)
  {
    importeConDesc = acumPrecios - acumPrecios * descuento / 100;
    mensajeDesc = `B) Importe total con descuento: ${importeConDesc}`;
  }

  mensajeTipoMasCant = `C) Tipo con m\u00E1s cantidad de bolsas: ${tipoMasCantidad}`;

  mensajeTipoMasCaro = `D) Tipo m\u00E1s caro: ${tipoMasCaro}`;

  alert(`${mensajeImporte}\n${mensajeDesc}\n${mensajeTipoMasCant}\n${mensajeTipoMasCaro}`);
}
