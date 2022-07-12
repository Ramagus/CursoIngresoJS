function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flag = 0;
	let nacionMasTemp;
	let contadorMayorEdadSoltero = 0;
	let contadorSolterasViudas = 0;
	let contadorTerceraEdad = 0;
	let acumEdadCasadas = 0;
	let contadorEdadCasadas = 0;
	let promedioEdadCasadas;
	let mensaje;
	let respuesta;
	
	do
	{
		nombre = prompt("Ingrese nombre");

		nacionalidad = prompt("Ingrese nacionalidad");

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
			temperatura = parseFloat(prompt("Error. Ingrese temperatura corporal"));
		}

		if(flag == 0 || temperatura > tempMax)
		{
			tempMax = temperatura;
			nacionMasTemp = nacionalidad;

			flag = 1;
		}

		if(edad >= 18 && estadoCivil == "soltero")
		{
			contadorMayorEdadSoltero++;
		}

		if(sexo == 'F' && (estadoCivil == "soltero" || estadoCivil == "viudo"))
		{
			contadorSolterasViudas++;
		}

		if(edad > 60 && temperatura > 38)
		{
			contadorTerceraEdad++;
		}

		if(sexo == 'F' && estadoCivil == "casado")
		{
			acumEdadCasadas += edad;
			contadorEdadCasadas++;
		}

		respuesta = confirm("¿Desea continuar?");

	} while(respuesta);

	promedioEdadCasadas = acumEdadCasadas / contadorEdadCasadas;

	mensaje = `A) Nacionalidad de persona con m\u00E1s temperatura: ${nacionMasTemp}\n
	B) Cantidad de mayores de edad solteros: ${contadorMayorEdadSoltero}\n
	C) Cantidad de hombres que hay solteros o viudos: ${contadorSolterasViudas}\n
	D) Cantidad de personas de la tercera edad que tienen m\u00E1s de 38 de temperatura: ${contadorTerceraEdad}\n
	E) Promedio de edad entre mujeres casadas: ${promedioEdadCasadas}`;

	alert(mensaje);
}
