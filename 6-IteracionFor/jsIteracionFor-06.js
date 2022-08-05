function mostrar()
{
	let numero;
    let contadorPares = 0;
    let i;

    numero = parseInt(prompt("Ingrese un n\u00FAmero positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros positivos"));
    }

    console.log("N\u00FAmeros pares:\n");

    for(i = 1; i <= numero; i++)
    {
        if(i % 2 == 0)
        {
            contadorPares++;

            console.log(i);
        }
    }

    console.log(`Cantidad de n\u00FAmeros pares: ${contadorPares}`);
}
