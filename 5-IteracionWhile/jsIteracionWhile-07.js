function mostrar()
{
    let numero;
    let suma = 0;
    let i = 0;
    let promedio;
    let respuesta;

    do
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        suma += numero;

        i++;

        respuesta = confirm("¿Desea continuar?"); //respuesta = prompt("¿Desea continuar?").toLowerCase();

        /*while(respuesta != 's' && respuesta != 'n')
        {
            respuesta = prompt("Error. Solo s o n").toLowerCase();
        }*/

    } while(respuesta); //while(respuesta == 's');

    promedio = suma / i;

    document.getElementById("txtIdSuma").value = suma;
    document.getElementById("txtIdPromedio").value = promedio;
}
