function sacarResto()
{
	let dividendo;
	let divisor;
	let resultado;
	
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resultado = dividendo % divisor;
	
	alert(`El resto es ${resultado}`);
}
