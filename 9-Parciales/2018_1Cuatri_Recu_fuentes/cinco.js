function mostrar()
{
    let diaSemana;
    let mensaje;

    diaSemana = prompt("Ingrese un d\u00EDa de la semana");
    
    switch(diaSemana)
    {
        case "S\u00E1bado":
        case "Domingo":

            mensaje = "Buen finde";

            break;

        case "Lunes":
        case "Martes":
        case "Mi\u00E9rcoles":
        case "Jueves":
        case "Viernes":

            mensaje = "A trabajar";

            break;

        default:

            mensaje = "Eso no es un d\u00EDa v\u00E1lido";
    }

    alert(mensaje);
}
