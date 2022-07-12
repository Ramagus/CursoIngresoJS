function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flag = 0;
	let nombreMasTemp;
	let contadorMayorEdadViudo = 0;
	let contadorSolterosViudos = 0;
	let contadorTerceraEdad = 0;
	let acumEdadSolteros = 0;
	let contadorEdadSolteros = 0;
	let promedioEdadSolteros;
	let mensaje;
	let respuesta;
	
	do
	{
		nombre = prompt("Ingrese nombre");

		edad = parseInt(prompt("Ingrese edad"));

		while(edad < 1 || edad > 100 || isNaN(edad))
		{
			edad = parseInt(prompt("Error. Ingrese edad"));
		}

		sexo = prompt("Ingrese sexo (F o M)").toUpperCase();

		while(sexo != 'F' && sexo != 'M')
		{
			sexo = prompt("Error. Ingrese sexo (F o M)").toUpperCase();
		}

		estadoCivil = prompt("Ingrese estado civil (soltero, casado o viudo)");

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Ingrese estado civil (soltero, casado o viudo)");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura corporal"));

		while(isNaN(temperatura))
		{
			temperatura = parseFloat(prompt("Ingrese temperatura corporal"));
		}

		if(flag == 0 || temperatura > tempMax)
		{
			tempMax = temperatura;
			nombreMasTemp = nombre;

			flag = 1;
		}

		if(edad >= 18 && estadoCivil == "viudo")
		{
			contadorMayorEdadViudo++;
		}

		if(sexo == 'M' && (estadoCivil == "soltero" || estadoCivil == "viudo"))
		{
			contadorSolterosViudos++;
		}

		if(edad > 60 && temperatura > 38)
		{
			contadorTerceraEdad++;
		}

		if(sexo == 'M' && estadoCivil == "soltero")
		{
			acumEdadSolteros += edad;
			contadorEdadSolteros++;
		}

		respuesta = confirm("¿Desea continuar?");

	} while(respuesta);

	promedioEdadSolteros = acumEdadSolteros / contadorEdadSolteros;

	mensaje = `A) Nombre de persona con m\u00E1s temperatura: ${nombreMasTemp}\n
	B) Cantidad de mayores de edad viudos: ${contadorMayorEdadViudo}\n
	C) Cantidad de hombres que hay solteros o viudos: ${contadorSolterosViudos}\n
	D) Cantidad de personas de la tercera edad que tienen m\u00E1s de 38 de temperatura: ${contadorTerceraEdad}\n
	E) Promedio de edad entre hombres solteros: ${promedioEdadSolteros}`;

	alert(mensaje);
}
