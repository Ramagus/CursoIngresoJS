let eleccionMaquina;
let eleccionHumano;
let ContadorDeEmpates = 0;
let ContadorDeGanadas = 0;
let ContadorDePerdidas = 0;

function comenzar()
{
	let numeroSecreto = Math.floor(Math.random() * 3 + 1);
	
	switch(numeroSecreto)
	{
		case 1:
			
			eleccionMaquina = "Piedra";
			
			break;
			
		case 2:
			
			eleccionMaquina = "Papel";
			
			break;
			
		case 3:
			
			eleccionMaquina = "Tijera";
			
			break;
	}
	
	//alert(eleccionMaquina);
}

function piedra()
{
	alert("La M\u00E1quina seleccion\u00F3: " + eleccionMaquina);
	
	eleccionHumano = "Piedra";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Tijera")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Gan\u00F3 la M\u00E1quina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado();
}

function papel()
{
	alert("La M\u00E1quina seleccion\u00F3: " + eleccionMaquina);
	
	eleccionHumano = "Papel";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Piedra")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Gan\u00F3 la M\u00E1quina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado();
}

function tijera()
{
	alert("La M\u00E1quina seleccion\u00F3: " + eleccionMaquina);
	
	eleccionHumano = "Tijera";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Papel")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Gan\u00F3 la M\u00E1quina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado();
}

function mostrarResultado()
{
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates + " partidas empatadas";
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas + " partidas perdidas";
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas + " partidas ganadas";
	
	comenzar();
}
