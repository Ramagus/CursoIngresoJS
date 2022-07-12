function comenzarIngreso() 
{
    let edad;
    let sexo;
    let estadoCivil;
    let sueldo;
    let legajo;
    let nacionalidad;

    edad = parseInt(prompt("Ingrese la edad"));

    while(edad < 18 || edad > 90 || isNaN(edad))
    {
        edad = parseInt(prompt("Error. Ingrese una edad v\u00E1lida"));
    }

    sexo = prompt("Ingrese el sexo").toUpperCase();

    while(sexo != 'M' && sexo != 'F')
    {
        sexo = prompt("Error. Solo M o F").toUpperCase();
    }

    switch(sexo)
    {
        case 'M':

            sexo = "Masculino";

            break;

        case 'F':

            sexo = "Femenino";

            break;
    }

    estadoCivil = parseInt(prompt("Ingrese el Estado Civil"));

    while(estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil))
    {
        estadoCivil = parseInt(prompt("Error. Ingrese un Estado Civil v\u00E1lido"));
    }

    switch(estadoCivil)
    {
        case 1:

            if(sexo == "Masculino")
            {
                estadoCivil = "Soltero";
            }

            else
            {
                estadoCivil = "Soltera";
            }

            break;

        case 2:

            if(sexo == "Masculino")
            {
                estadoCivil = "Casado";
            }

            else
            {
                estadoCivil = "Casada";
            }

            break;

        case 3:

            if(sexo == "Masculino")
            {
                estadoCivil = "Divorciado";
            }

            else
            {
                estadoCivil = "Divorciada";
            }

            break;

        case 4:

            if(sexo == "Masculino")
            {
                estadoCivil = "Viudo";
            }

            else
            {
                estadoCivil = "Viuda";
            }

            break;
    }

    sueldo = parseFloat(prompt("Ingrese el sueldo bruto"));

    while(sueldo < 8000 || isNaN(sueldo))
    {
        sueldo = parseFloat(prompt("Error. Ingrese un sueldo bruto v\u00E1lido"));
    }

    legajo = parseInt(prompt("Ingrese el legajo"));

    while(legajo < 1000 || legajo > 9999 || isNaN(legajo))
    {
        legajo = parseInt(prompt("Error. Ingrese un legajo v\u00E1lido"));
    }

    nacionalidad = prompt("Ingrese la nacionalidad").toUpperCase();

    while(nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N')
    {
        nacionalidad = prompt("Error. Ingrese una nacionalidad v\u00E1lida").toUpperCase();
    }

    switch(nacionalidad)
    {
        case 'A':

            nacionalidad = "Argentina";

            break;

        case 'E':

            nacionalidad = "Extranjera";

            break;

        case 'N':

            nacionalidad = "Nacionalizada";

            break;
    }

    document.getElementById("txtIdEdad").value = edad;
    document.getElementById("txtIdSexo").value = sexo;
    document.getElementById("txtIdEstadoCivil").value = estadoCivil;
    document.getElementById("txtIdSueldo").value = sueldo.toFixed(2);
    document.getElementById("txtIdLegajo").value = legajo;
    document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
