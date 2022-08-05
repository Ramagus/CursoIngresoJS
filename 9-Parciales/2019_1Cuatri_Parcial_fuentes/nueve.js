function mostrar()
{
    let pais;
    let cantidadHabitantes;
    let contadorTempPares = 0;
    let habMin;
    let paisHabMin;
    let tempMin;
    let contadorPaises = 0;
    let acumHab = 0;
    let contHab = 0;
    let promedioHab;
    let paisTempMin;
    let continuar;
    let flag = 0;

    do
    {
        pais = prompt("Ingrese un pa\u00EDs");

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000"));

        while(cantidadHabitantes < 1 || cantidadHabitantes > 7000)
        {
            cantidadHabitantes = parseInt(prompt("Error. La cantidad de habitantes debe estar entre 1 y 7000"));
        }

        temperatura = parseFloat(prompt("Ingrese la temperatura entre -50 y 50"));

        while(temperatura < -50 || temperatura > 50)
        {
            temperatura = parseFloat(prompt("Error. La temperatura debe estar entre -50 y 50"));
        }

        if(temperatura % 2 == 0)
        {
            contadorTempPares++;
        }

        if(flag == 0 || cantidadHabitantes < habMin)
        {
            habMin = cantidadHabitantes;
            paisHabMin = pais;
        }

        if(flag == 0 || temperatura < tempMin)
        {
            tempMin = temperatura;
            paisTempMin = pais;
            
            flag = 1;
        }

        if(temperatura > 40)
        {
            contadorPaises++;
        }

        acumHab += cantidadHabitantes;
        contHab++;

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedioHab = acumHab / contHab;

    document.write(`Cantidad de temperaturas pares: ${contadorTempPares}<br>`);
    document.write(`Nombre del pa\u00EDs con menos habitantes: ${paisHabMin}<br>`);
    document.write(`Cantidad de pa\u00EDses que superan los 40 grados: ${contadorPaises}<br>`);
    document.write(`Promedio de habitantes entre los pa\u00EDses ingresados: ${promedioHab}<br>`);
    document.write(`Temperatura m\u00EDnima ingresada: ${tempMin}. Nombre del pa\u00EDs que registr\u00F3 esa temperatura: ${paisTempMin}<br>`);
}
