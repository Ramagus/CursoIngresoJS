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

        if(numeroUsuario == numeroSecreto)
        {
            alert(`Usted es un ganador!!!\nY en solo ${contadorIntentos} intentos`);
        }

        else if(numeroUsuario < numeroSecreto)
        {
            alert("Falta...");
        }

        else
        {
            alert("Se pas\u00F3...");
        }

        document.getElementById("txtIdIntentos").value = contadorIntentos;
    }
}
