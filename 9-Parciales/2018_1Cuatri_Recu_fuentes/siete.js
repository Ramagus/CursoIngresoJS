function mostrar()
{
    let nota;
    let sexo;
    let acumulador = 0;
    let promedio;
    let notaMinima;
    let sexoMinimo;
    let contadorVarones = 0;
    let i;

    for(i = 0; i < 5; i++)
    {
        nota = parseInt(prompt("Ingrese la nota"));

        while(nota < 0 || nota > 10)
        {
            nota = parseInt(prompt("Error. Ingrese una nota entre 0 y 10"));
        }

        sexo = prompt("Ingrese el sexo").toUpperCase();

        while(sexo != 'F' && sexo != 'M')
        {
            sexo = prompt("Error. Solo F o M").toUpperCase();
        }

        acumulador += nota;

        if(i == 0 || nota < notaMinima)
        {
            notaMinima = nota;
            sexoMinimo = sexo;
        }

        if(sexo == 'M' && nota >= 6)
        {
            contadorVarones++;
        }
    }

    promedio = acumulador / i;

    alert(`Promedio de notas totales: ${promedio}\nNota m\u00E1s baja: ${notaMinima}. Sexo de esa persona: ${sexoMinimo}\nCantidad de varones que su nota haya sido mayor o igual a 6: ${contadorVarones}`);
}
