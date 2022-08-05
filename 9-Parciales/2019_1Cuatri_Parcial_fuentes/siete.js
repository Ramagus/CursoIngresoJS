function mostrar()
{           
    let altura;
    let sexo;
    let acumulador = 0;
    let promedio;
    let alturaMinima;
    let sexoAltMin;
    let contadorMujeres = 0;
    let i;

    for(i = 0; i < 5; i++)
    {
        altura = parseFloat(prompt("Ingrese la altura en cent\u00EDmetros entre 0 y 250"));

        while(altura < 0 || altura > 250)
        {
            altura = parseFloat(prompt("Error. La altura en cent\u00EDmetros debe estar entre 0 y 250"));
        }

        sexo = prompt("Ingrese el sexo (F o M)").toUpperCase();

        while(sexo != 'F' && sexo!= 'M')
        {
            sexo = prompt("Error. Solo F o M").toUpperCase();
        }

        acumulador += altura;
        
        if(i == 0 || altura < alturaMinima)
        {
            alturaMinima = altura;
            sexoAltMin = sexo;
        }

        if(sexo == 'F' && altura > 190)
        {
            contadorMujeres++;
        }
    }

    promedio = acumulador / i;

    alert(`Promedio de las alturas totales: ${promedio}\nAltura m\u00E1s baja: ${alturaMinima}. Sexo de esa persona: ${sexoAltMin}\nCantidad de mujeres que su altura supere los 190 cent\u00EDmetros: ${contadorMujeres}`);
}
