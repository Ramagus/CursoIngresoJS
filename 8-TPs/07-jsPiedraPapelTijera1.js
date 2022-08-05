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
}

function piedra()
{
	alert(`La M\u00E1quina seleccion\u00F3: ${eleccionMaquina}`);
	
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
	
	comenzar();
}

function papel()
{
	alert(`La M\u00E1quina seleccion\u00F3: ${eleccionMaquina}`);
	
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
	
	comenzar();
}

function tijera()
{
	alert(`La M\u00E1quina seleccion\u00F3: ${eleccionMaquina}`);
	
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
	
	comenzar();
}
