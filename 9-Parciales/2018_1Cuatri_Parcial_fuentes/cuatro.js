function mostrar()
{
    let numero1;
    let numero2;
    let resultado;
    let flag = 0;
    let mensaje;

    numero1 = parseInt(prompt("Ingrese el primer n\u00FAmero"));
    numero2 = parseInt(prompt("Ingrese el segundo n\u00FAmero"));

    if(numero1 == numero2)
    {   
        resultado = "" + numero1 + numero2;
    }

    else if(numero1 > numero2)
    {
        resultado = numero1 - numero2;
    }

    else
    {
        resultado = numero1 + numero2;

        if(resultado > 10)
        {
            flag = 1;
        }
    }

    mensaje = `Resultado: ${resultado}`;

    if(flag == 1)
    {
        mensaje += `\nLa suma es ${resultado} y super\u00F3 el 10`;
    }

    alert(mensaje);
}
