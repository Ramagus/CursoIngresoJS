let numeroSecreto; 
let numeroUsuario;
let contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100 + 1);

    alert("N\u00FAmero secreto generado");
}

function verificar()
{
	numeroUsuario = parseInt(document.getElementById("txtIdNumero").value);  
  
	if(numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario))
    {
        alert("Error. Solo n\u00FAmero de 1 al 100");
	}
	
	else
	{
		contadorIntentos++;

		if(numeroUsuario < numeroSecreto)
		{
			alert("El n\u00FAmero secreto es m\u00E1s grande");
		}

		else if(numeroUsuario > numeroSecreto)
		{
			alert("El n\u00FAmero secreto es m\u00E1s chico");
		}

		else
		{
			switch(contadorIntentos)
			{
				case 1:
				
					alert("Usted es un Ps\u00EDquico");
				
					break;
				
				case 2:
				
					alert("Excelente percepci\u00F3n");
				
					break;
				
				case 3:
				
					alert("Esto es suerte");

					break;
				
				case 4:
				
					alert("Excelente t\u00E9cnica");
				
					break;
				
				case 5:
				
					alert("Usted est\u00E1 en la media");
				
					break;
				
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				
					alert("Falta t\u00E9cnica");
				
					break;
				
				default:
				
					alert("Afortunado en el amor!!");
			}
	
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
}
