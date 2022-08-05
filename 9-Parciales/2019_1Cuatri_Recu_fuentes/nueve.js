function mostrar()
{
    let nombre;
    let edad;
    let sexo;
    let notaFinal;
    let contVaronesAprobados = 0;
    let acumNotasMenorEdad = 0;
    let contNotasMenorEdad = 0;
    let promedioNotasMenorEdad;
    let acumNotasAdolescente = 0;
    let contNotasAdolescente = 0;
    let promedioNotasAdolescente;
    let acumNotasMayorEdad = 0;
    let contNotasMayorEdad = 0;
    let promedioNotasMayorEdad;
    let acumNotasFem = 0;
    let contNotasFem = 0;
    let promedioNotasFem;
    let acumNotasMasc = 0;
    let contNotasMasc = 0;
    let promedioNotasMasc;
    let continuar;

    do
    {
        nombre = prompt("Ingrese un nombre");
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

        edad = parseInt(prompt("Ingrese la edad entre 1 y 100"));

        while(edad < 1 || edad > 100)
        {
            edad = parseInt(prompt("Error. La edad debe estar entre 1 y 100"));
        }

        sexo = prompt("Ingrese el sexo (F/M)").toUpperCase();

        while(sexo != 'F' && sexo != 'M')
        {
            sexo = prompt("Error. El sexo debe ser F o M").toUpperCase();
        }

        notaFinal = parseInt(prompt("Ingrese la nota final entre 1 y 10"));

        while(notaFinal < 1 || notaFinal > 10)
        {
            notaFinal = parseInt(prompt("Error. La nota final debe estar entre 1 y 10"));
        }

        if(sexo == 'M' && notaFinal >= 6)
        {
            contVaronesAprobados++;
        }

        if(edad >= 1 && edad <= 10)
        {
            acumNotasMenorEdad += notaFinal;
            contNotasMenorEdad++;
        }

        else if(edad >= 11 && edad <= 17)
        {
            acumNotasAdolescente += notaFinal;
            contNotasAdolescente++;
        }

        else
        {
            acumNotasMayorEdad += notaFinal;
            contNotasMayorEdad++;
        }

        if(sexo == 'F')
        {
            acumNotasFem += notaFinal;
            contNotasFem++;
        }

        else
        {
            acumNotasMasc += notaFinal;
            contNotasMasc++;
        }

        continuar = confirm("¿Desea continuar?");

    } while(continuar);

    promedioNotasMenorEdad = acumNotasMenorEdad / contNotasMenorEdad;
    promedioNotasAdolescente = acumNotasAdolescente / contNotasAdolescente;
    promedioNotasMayorEdad = acumNotasMayorEdad / contNotasMayorEdad;
    promedioNotasFem = acumNotasFem / contNotasFem;
    promedioNotasMasc = acumNotasMasc / contNotasMasc;

    document.write(`Cantidad de varones aprobados: ${contVaronesAprobados}<br>`);
    document.write(`Promedio de notas de los menores de edad: ${promedioNotasMenorEdad}<br>`);
    document.write(`Promedio de notas de los adolescentes: ${promedioNotasAdolescente}<br>`);
    document.write(`Promedio de notas de los mayores: ${promedioNotasMayorEdad}<br>`);
    document.write(`Promedio de notas por sexo masculino: ${promedioNotasMasc}<br>`);
    document.write(`Promedio de notas por sexo femenino: ${promedioNotasFem}<br>`);
}
