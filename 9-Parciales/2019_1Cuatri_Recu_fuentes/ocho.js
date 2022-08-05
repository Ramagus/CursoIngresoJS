function mostrar()
{
    let color;
    let valor;
    let contadorRojos = 0;
    let contadorRojosMayor5000 = 0;
    let contadorMenor5000 = 0;
    let acumulador = 0;
    let contador = 0;
    let promedio;
    let maximo;
    let colorMax;
    let flag = 0;
    let continuar;

    do
    {
        color = prompt("Ingrese un color (Rojo, Verde o Amarillo)");
        color = color.charAt(0).toUpperCase() + color.slice(1);

        while(color != "Rojo" && color != "Verde" && color != "Amarillo")
        {
            color = prompt("Error. El color debe ser Rojo, Verde o Amarillo");
            color = color.charAt(0).toUpperCase() + color.slice(1);
        }

        valor = parseInt(prompt("Ingrese un valor entre 0 y 10000"));

        while(valor < 0 || valor > 10000)
        {
            valor = parseInt(prompt("Error. El valor debe estar entre 0 y 10000"));
        }

        if(color == "Rojo")
        {
            contadorRojos++;

            if(valor > 5000)
            {
                contadorRojosMayor5000++;
            }
        }

        if(valor < 5000)
        {
            contadorMenor5000++;
        }

        acumulador += valor;
        contador++;

        if(!flag || valor > maximo)
        {
            maximo = valor;
            colorMax = color;

            flag = 1;
        }

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedio = acumulador / contador;

    document.write(`Cantidad de rojos: ${contadorRojos}<br>`);
    document.write(`Cantidad de rojos con precio mayor a 5000: ${contadorRojosMayor5000}<br>`);
    document.write(`Cantidad de veh\u00EDculos con precio menor a 5000: ${contadorMenor5000}<br>`);
    document.write(`Promedio de todos los veh\u00EDculos ingresados: ${promedio}<br>`);
    document.write(`El m\u00E1s caro: ${maximo} - Su color: ${colorMax}<br>`);
}
