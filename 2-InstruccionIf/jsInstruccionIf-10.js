function mostrar()
{
	let nota;
	
	nota = Math.round(Math.random() * 9 + 1);

	if(nota >= 9)
	{
		alert(`Excelente. Nota: ${nota}`);
	}

	else if(nota < 4)
	{
		alert(`Vamos, la pr\u00F3xima se puede. Nota: ${nota}`);
	}

	else
	{
		alert(`Aprob\u00F3. Nota: ${nota}`);
	}
}
