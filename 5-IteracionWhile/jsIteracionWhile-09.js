function mostrar()
{
	let numero;
    let maximo;
    let minimo;
    let respuesta;
    let flag = false;

    do
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        if(flag == false || numero > maximo)
        {
            maximo = numero;
        }

        if(flag == false || numero < minimo)
        {
            minimo = numero;
        }

        if(flag == false)
        {
            flag = true;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);
    
    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
}
