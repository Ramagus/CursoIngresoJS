function mostrar()
{
    let letra;
    let numero;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let contadorPositivos = 0;
    let acumPos = 0;
    let acumNeg = 0;
    let promedioPositivos;
    let numMax;
    let numMin;
    let letraMax;
    let letraMin;
    let continuar;
    let flag = 0;

    do
    {
        letra = prompt("Ingrese una letra");

        while((letra < 'a' || letra > 'z') && (letra < 'A' || letra > 'Z'))
        {
            letra = prompt("Error. Solo letras");
        }

        numero = parseInt(prompt("Ingrese un n\u00FAmero entre -100 y 100"));

        while(numero < -100 || numero > 100)
        {
            numero = parseInt(prompt("Error. El n\u00FAmero debe estar entre -100 y 100"));
        }

        if(numero % 2 == 0)
        {
            contadorPares++;
        }

        else
        {
            contadorImpares++;
        }

        if(numero == 0)
        {
            contadorCeros++;
        }

        else if(numero > 0)
        {
            acumPos += numero;
            
            contadorPositivos++;
        }

        else
        {
            acumNeg += numero;
        }

        if(flag == 0 || numero > numMax)
        {
            numMax = numero;
            letraMax = letra;
        }
        
        if(flag == 0 || numero < numMin)
        {
            numMin = numero;
            letraMin = letra;

            flag = 1;
        }

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedioPositivos = acumPos / contadorPositivos;

    document.write(`Cantidad de n\u00FAmeros pares: ${contadorPares}<br>`);
    document.write(`Cantidad de n\u00FAmeros impares: ${contadorImpares}<br>`);
    document.write(`Cantidad de ceros: ${contadorCeros}<br>`);
    document.write(`Promedio de n\u00FAmeros positivos ingresados: ${promedioPositivos}<br>`);
    document.write(`Suma de n\u00FAmeros negativos: ${acumNeg}<br>`);
    document.write(`N\u00FAmero m\u00E1ximo: ${numMax}. Letra m\u00E1xima: ${letraMax}<br>`);
    document.write(`N\u00FAmero m\u00EDnimo: ${numMin}. Letra m\u00EDnima: ${letraMin}<br>`);
}
