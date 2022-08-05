function mostrar()
{
	let numero;

    numero = parseInt(prompt("Ingrese un n\u00FAmero entre 0 y 9"));

    while((numero < 0 || numero > 9) || isNaN(numero)) //while(!(numero >= 0 && numero <= 9) || isNaN(numero))
    {
        numero = parseInt(prompt("Error. El n\u00FAmero debe estar entre 0 y 9"));
    }

    document.getElementById("txtIdNumero").value = numero;	
}
