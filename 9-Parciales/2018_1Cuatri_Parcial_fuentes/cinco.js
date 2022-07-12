function mostrar()
{
    let planeta;
    let mensaje;

    planeta = prompt("Ingrese un planeta del Sistema Solar");

    switch(planeta)
    {
        case "tierra":

            mensaje = "Ac\u00E1 vivimos";

            break;

        case "mercurio":
        case "venus":
        case "marte":

            mensaje = "Ac\u00E1 hace m\u00E1s calor";

            break;

        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
            
            mensaje = "Ac\u00E1 hace m\u00E1s fr\u00EDo";

            break;

        default:

            mensaje = "Eso no es un planeta v\u00E1lido";
    }

    alert(mensaje);
}
