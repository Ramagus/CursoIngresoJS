function mostrar()
{
	let numero;
    let mensaje;
    let i;
    let flag = true;

    numero = parseInt(prompt("Ingrese un n\u00FAmero positivo"));

    while(numero <= 0 || isNaN(numero))
    {
        numero = parseInt(prompt("Error. Solo n\u00FAmeros positivos"));
    }

    for(i = 2; i <= numero / i; i++)
    {
        if(numero % i == 0)
        {
            flag = false;
            break;
        }
	}

	mensaje = `El n\u00FAmero ${numero} `;
	
	if(numero != 1 && flag == true)
    {
        mensaje += `es primo`;
    }

    else
    {
        mensaje += `no es primo`;
	}
	
	alert(mensaje);
}
