function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let contadorTempPares = 0;
    let contadorMenosCero = 0;
    let acumuladorPeso = 0;
    let contadorPeso = 0;
    let promedioPeso;
    let pesoMax;
    let marcaPesoMax;
    let pesoMin;
    let continuar;
    let flag = 0;

    do
    {
        marca = prompt("Ingrese la marca del producto");

        peso = parseFloat(prompt("Ingrese el peso del producto entre 1 y 100"));

        while(peso < 1 || peso > 100)
        {
            peso = parseFloat(prompt("Error. El peso del producto debe estar entre 1 y 100"));
        }

        temperatura = parseFloat(prompt("Ingrese la temperatura del producto entre -30 y 30"));

        while(temperatura < -30 || temperatura > 30)
        {
            temperatura = parseFloat(prompt("Error. La temperatura debe estar entre -30 y 30"));
        }

        if(temperatura % 2 == 0)
        {
            contadorTempPares++;
        }

        if(flag == 0 || peso > pesoMax)
        {
            pesoMax = peso;
            marcaPesoMax = marca;
        }

        if(flag == 0 || peso < pesoMin)
        {
            pesoMin = peso;
            
            flag = 1;
        }

        if(temperatura < 0)
        {
            contadorMenosCero++;
        }

        acumuladorPeso += peso;
        contadorPeso++;

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedioPeso = acumuladorPeso / contadorPeso;

    document.write(`Cantidad de temperaturas pares: ${contadorTempPares}<br>`);
    document.write(`Marca del producto m\u00E1s pesado: ${marcaPesoMax}<br>`);
    document.write(`Cantidad de productos que se conservan a menos de 0 grados: ${contadorMenosCero}<br>`);
    document.write(`Promedio del peso de todos los productos: ${promedioPeso}<br>`);
    document.write(`Peso m\u00E1ximo: ${pesoMax}<br>`);
    document.write(`Peso m\u00EDnimo: ${pesoMin}<br>`);
}
