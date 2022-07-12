function mostrar()
{   
    let nombre1;
    let peso1;
    let nombre2;
    let peso2;
    let sumaPesos;
    let promedioPeso;

    nombre1 = prompt("Ingrese el primer nombre");
    peso1 = parseFloat(prompt("Ingrese el primer peso"));

    nombre2 = prompt("Ingrese el segundo nombre");
    peso2 = parseFloat(prompt("Ingrese el segundo peso"));

    sumaPesos = peso1 + peso2;

    promedioPeso = sumaPesos / 2;

    alert(`Ustedes se llaman ${nombre1} y ${nombre2}. Pesan ${peso1} y ${peso2} kilos, que sumados son ${sumaPesos} kilos y el promedio de peso ${promedioPeso}`);
}
