function mostrar()
{
    let numero;
    let suma = 0;
    let i = 0;
    let promedio;

    while(i < 5)
    {
        numero = parseInt(prompt("Ingrese un n\u00FAmero"));

        while(isNaN(numero))
        {
            numero = parseInt(prompt("Error. Solo n\u00FAmeros"));
        }

        suma += numero;

        i++;
    }

    promedio = suma / i;

    document.getElementById("txtIdSuma").value = suma;
    document.getElementById("txtIdPromedio").value = promedio;
}
