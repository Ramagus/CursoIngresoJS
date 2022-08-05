function mostrar()
{
    let numero;
    let i;

    numero = parseInt(prompt("Ingrese un n\u00FAmero"));
    
    while(isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
    }

    for(i = 0; i < numero; i++)
    {
		console.log(i);
		
		if(i == 5)
        {
            break;
        }
    }
}
