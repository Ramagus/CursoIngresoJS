function mostrar()
{
	let numero;
    let respuesta;
    let acumuladorPos = 0;
    let acumuladorNeg = 0;
    let contadorPos = 0;
    let contadorNeg = 0;
    let contadorCeros = 0;
    let contadorPares = 0;
    let promPos = 0;
    let promNeg = 0;
    let diferencia;

    do
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        if(numero > 0)
        {
            acumuladorPos += numero;

            contadorPos++;
        } 

        else if(numero < 0)
        {
            acumuladorNeg += numero;

            contadorNeg++;
        } 

        else
        {
            contadorCeros++;
        }

        if(numero % 2 == 0)
        {
            contadorPares++;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);

    if(contadorPos > 0)
    {
        promPos = acumuladorPos / contadorPos;
    }

    if(contadorNeg > 0)
    {
        promNeg = acumuladorNeg / contadorNeg;
    }

    diferencia = contadorPos - contadorNeg;

    document.write(`1- Suma de los negativos: ${acumuladorNeg} <br>`);
    document.write(`2- Suma de los positivos: ${acumuladorPos} <br>`);
    document.write(`3- Cantidad de positivos: ${contadorPos} <br>`);
    document.write(`4- Cantidad de negativos: ${contadorNeg} <br>`);
    document.write(`5- Cantidad de ceros: ${contadorCeros} <br>`);
    document.write(`6- Cantidad de n\u00FAmeros pares: ${contadorPares} <br>`);
    document.write(`7- Promedio de positivos: ${promPos} <br>`);
    document.write(`8- Promedio de negativos: ${promNeg} <br>`);
    document.write(`9- Diferencia entre positivos y negativos: ${diferencia} <br>`);
}
