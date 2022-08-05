function mostrar()
{
	let numero;

    for( ; ; )
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {             
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        if(numero == 9)
        {
            break;
        }

        console.log(numero);
    }
}
