function mostrar()
{
	let numero;
    let contadorDivisores = 0;
    let i;
    
    numero = parseInt(prompt("Ingrese un n\u00FAmero positivo"));
    
    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros positivos"));
    }
    
    console.log("N\u00FAmeros divisores:\n");

    for(i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            contadorDivisores++;

            console.log(i); 
        }
    }
    
    console.log(`Cantidad de n\u00FAmeros divisores: ${contadorDivisores}`);
}
