function mostrar()
{
    let numero1;
    let numero2;
    let resto;
    let resultadoCuadrado;
    let resultadoResto;
    let mensaje = "";

    numero1 = parseInt(prompt("Ingrese el primer n\u00FAmero"));
    numero2 = parseInt(prompt("Ingrese el segundo n\u00FAmero"));

    if(numero1 == numero2)
    {   
        resultadoCuadrado = numero1 * numero2;

        mensaje = `Resultado del cuadrado: ${resultadoCuadrado}\n`;
    }

    resto = numero1 % numero2;

    if(resto == 0)
    {
        resultadoResto = numero1 - numero2;
    }

    else
    {
        resultadoResto = resto;
    }

    mensaje += `Resultado del resto: ${resultadoResto}`;

    if(resto > 3)
    {
        mensaje += `\nEl resto es mayor a 3`;
    }

    alert(mensaje);
}
