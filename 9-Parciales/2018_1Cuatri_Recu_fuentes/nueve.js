function mostrar()
{
    let nombreAnimal;
    let pesoAnimal;
    let tempHabitat;
    let contadorTempPares = 0;
    let nombreMax;
    let tempMax;
    let pesoMax;
    let pesoMaxMenosCero;
    let pesoMinMenosCero;
    let contadorAnimalMenosCero = 0;
    let acumPeso = 0;
    let contadorPeso = 0;
    let promedioPeso;
    let continuar;
    let flag = 0;

    do
    {
        nombreAnimal = prompt("Ingrese el nombre del animal");

        pesoAnimal = parseFloat(prompt("Ingrese el peso del animal entre 1 y 1000"));

        while(pesoAnimal < 1 || pesoAnimal > 1000)
        {
            pesoAnimal = parseFloat(prompt("Error. El peso debe estar entre 1 y 1000"));
        }

        tempHabitat = parseFloat(prompt("Ingrese la temperatura del h\u00E1bitat entre -30 y 30"));

        while(tempHabitat < -30 || tempHabitat > 30)
        {
            tempHabitat(parseFloat(prompt("Error. La temperatura debe estar entre -30 y 30")));
        }

        if(tempHabitat % 2 == 0)
        {
            contadorTempPares++;
        }

        if(flag == 0 || pesoAnimal > pesoMax)
        {
            pesoMax = pesoAnimal;
            
            nombreMax = nombreAnimal;
            tempMax = tempHabitat;
        }
        
        if(tempHabitat < 0)
        {
            contadorAnimalMenosCero++;

            if(flag == 0 || pesoAnimal > pesoMaxMenosCero)
            {
                pesoMaxMenosCero = pesoAnimal;
            }
        
            if(flag == 0 || pesoAnimal < pesoMinMenosCero)
            {
                pesoMinMenosCero = pesoAnimal;

                flag = 1;
            }
        }

        acumPeso += pesoAnimal;
        contadorPeso++;

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedioPeso = acumPeso / contadorPeso;

    document.write(`Cantidad de temperaturas pares: ${contadorTempPares}<br>`);
    document.write(`Nombre del animal m\u00E1s pesado: ${nombreMax}<br>`);
    document.write(`Temperatura del animal m\u00E1s pesado: ${tempMax}<br>`);
    document.write(`Cantidad de animales que viven a menos de 0 grados: ${contadorAnimalMenosCero}<br>`);
    document.write(`Promedio del peso de todos los animales: ${promedioPeso}<br>`);
    document.write(`Peso m\u00E1ximo de todos los animales cuyas temperaturas sean bajo cero: ${pesoMaxMenosCero}<br>`);
    document.write(`Peso m\u00EDnimo de todos los animales cuyas temperaturas sean bajo cero: ${pesoMinMenosCero}<br>`);
}
