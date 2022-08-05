function mostrar()
{
	let numero;
    let temp;
    let maximo;
    let minimo;
    let respuesta;
    let flag = false;
    let mensaje = "Ingrese un n\u00FAmero";
    let mensajeError = "Error. Solo n\u00FAmeros";

    do
    {
        if(flag == false)
        {
            temp = parseInt(prompt(mensaje));

            while(isNaN(temp))
            {
                temp = parseInt(prompt(mensajeError));
            }

            maximo = temp;
            minimo = temp;
            flag = true;
        }

        else
        {
            numero = parseInt(prompt(mensaje));

            while(isNaN(numero))
            {
                numero = parseInt(prompt(mensajeError));
            }

            if(numero > maximo)
            {
                maximo = numero;
            }

            else if(numero < minimo)
            {
                minimo = numero;
            }
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);
    
    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
}
