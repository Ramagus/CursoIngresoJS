function mostrar()
{
    let numero;
    let positivo = 0;
    let negativo = 1;
    let respuesta;
    let contadorNegativos = 0;

    do
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));  
        }

        if(numero >= 0)
        {
            positivo += numero;
        }

        else
        {
            negativo *= numero;
            
            contadorNegativos++;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);

    if(contadorNegativos == 0)
    {
        negativo = 0;
    }

    document.getElementById("txtIdSuma").value = positivo;
    document.getElementById("txtIdProducto").value = negativo;
}
