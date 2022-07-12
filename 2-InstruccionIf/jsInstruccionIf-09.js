function mostrar()
{
	let numero;
	let minimo = 1;
	let maximo = 10;
	
	/**Para numero flotante**/
	//numero = Math.random() * (maximo - minimo) + minimo;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(`N\u00FAmero generado: ${numero}`);
}
