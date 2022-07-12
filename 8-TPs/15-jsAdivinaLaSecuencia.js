let secuenciaSecretaDeColores;
let secuenciaIngresada = new Array("Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo");
let contadorDeIntentos = 0;

function comenzar()
{
	//En esta funcion deberiamos generar una secuencia random de los cuatro colores sin repetir colores
	let secuenciaAux = new Array("Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo");
	let indiceColor;
	let i;
	let j;
	let flag;

	secuenciaSecretaDeColores = ["Amarillo", "Rojo", "Azul", "Verde"];
 
	for(i = 0; i < secuenciaAux.length; i++)
	{
		do
		{
			flag = false;

			indiceColor = Math.floor(Math.random() * secuenciaSecretaDeColores.length);

			for(j = 0; j < i; j++)
			{
				if(secuenciaAux[j] == secuenciaSecretaDeColores[indiceColor])
				{
					flag = true;
					break;
				}
			}

		} while(flag);

		secuenciaAux[i] = secuenciaSecretaDeColores[indiceColor];
	}

	for(i = 0; i < secuenciaSecretaDeColores.length; i++)
	{
		secuenciaSecretaDeColores[i] = secuenciaAux[i];
	}

	console.info("Colores cargados", secuenciaSecretaDeColores);
}

function responder(parametroColor) 
{
	let i;

	for(i = 0; i < secuenciaIngresada.length; i++)
	{
		if(secuenciaIngresada[i] == "Vac\u00EDo")
		{
			secuenciaIngresada[i] = parametroColor;

			console.info("Colores ingresados", secuenciaIngresada);

			break;
		}
	}
}

function verificar()
{
	let mensaje;
	let aciertosConseguidos = 0;
	let i;

	contadorDeIntentos++;

	for(i = 0; i < 4; i++)
	{
		if(secuenciaIngresada[i] == secuenciaSecretaDeColores[i])
		{
			aciertosConseguidos++;
		}
	}

	if(aciertosConseguidos == 4)
	{
		mensaje = "Excelente!!!";
	}

	else
	{
		mensaje = "Correctas: " + aciertosConseguidos;

		if(contadorDeIntentos == 4)
		{
			alert("Casi lo logras... m\u00E1s suerte la pr\u00F3xima!!!");
			alert(secuenciaSecretaDeColores);
		}
	}

	switch(contadorDeIntentos)
	{
		case 1:

			document.getElementById("txtIdPrimerIntento").value = `${secuenciaIngresada} - ${mensaje}`;

			break;
		
		case 2:
			
			document.getElementById("txtIdSegundoIntento").value = `${secuenciaIngresada} - ${mensaje}`;
			
			break;

		case 3:
			
			document.getElementById("txtIdTercerIntento").value = `${secuenciaIngresada} - ${mensaje}`;
			
			break;
		
		case 4:
			
			document.getElementById("txtIdCuartoIntento").value = `${secuenciaIngresada} - ${mensaje}`;
			
			break;
	}

	secuenciaIngresada = new Array("Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo", "Vac\u00EDo");
}
