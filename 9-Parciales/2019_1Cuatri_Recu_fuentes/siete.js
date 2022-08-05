function mostrar()
{
    let kilos;
    let sabor;
    let acumuladorKilos = 0;
    let promedioKilos;
    let kilosMinimo;
    let saborMin;
    let acumuladorCarne = 0;
    let contadorCarne = 0;
    let promedioCarne;
    let mensaje;
    let i;

    for(i = 0; i < 10; i++)
    {
        kilos = parseFloat(prompt("Ingrese los kilos entre 0 y 500"));

        while(kilos < 0 || kilos > 500)
        {
            kilos = parseFloat(prompt("Error. Los kilos deben estar entre 0 y 500"));
        }

        sabor = prompt("Ingrese el sabor (Carne, Vegetales o Pollo)");
        sabor = sabor.charAt(0).toUpperCase() + sabor.slice(1);

        while(sabor != "Carne" && sabor != "Vegetales" && sabor != "Pollo")
        {
            sabor = prompt("Error. El sabor debe ser Carne, Vegetales o Pollo");
            sabor = sabor.charAt(0).toUpperCase() + sabor.slice(1);
        }

        acumuladorKilos += kilos;
        
        if(i == 0 || kilos < kilosMinimo)
        {
            kilosMinimo = kilos;
            saborMin = sabor;
        }

        if(sabor == "Carne")
        {
            acumuladorCarne += kilos;
            contadorCarne++;
        }
    }

    promedioKilos = acumuladorKilos / i;

    mensaje = `Promedio de los kilos totales: ${promedioKilos}\nEl m\u00E1s liviano: ${kilosMinimo} - Su sabor: ${SaborMin}`;

    if(contadorCarne > 0)
    {
        promedioCarne = acumuladorCarne / contadorCarne;

        mensaje += `\nCantidad de sabor carne: ${contadorCarne} - Promedio de kilos de sabor carne: ${promedioCarne}`;
    }

    else
    {
        mensaje += `\nNo se ingres\u00F3 sabor carne`;
    }

    alert(mensaje);
}
