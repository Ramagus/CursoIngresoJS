/*
Observaciones: El ejercicio pretende explicar el length de los string y un recorrido sobre una cadena.

Temas que quedan fuera del alcance deseado:
	1- Como sacar los carateres que no son letras
	2- Como cambiar las vocales con acento
	3- Las letras mayusculas
	4- Vectores
*/

/* 
Algunos palindromos para testear:
-neuquen
-luz azul
-a ti no bonita
-amad a la dama
-ateo poco poeta
-la ruta natural
-la tele letal
*/

function verificarPalindromo() 
{
	let palabraIngresada;
	let palabraSinEspacios = "";
	let palabraInvertida = "";
	let i;

	palabraIngresada = document.getElementById("txtIdPalabra").value;
	//console.log(palabraIngresada.length);

	for(i = 0; i < palabraIngresada.length; i++)
	{
		//console.log(palabraIngresada[i]);

		if(palabraIngresada[i] == " ") //palabraIngresada[i] es cada letra por separado
		{
			continue; //esto permite saltear las siguentes lineas si encuentra espacio
		}

		palabraSinEspacios += palabraIngresada[i];
	}

	for(i = palabraSinEspacios.length - 1; i >= 0; i--)
	{
		palabraInvertida += palabraSinEspacios[i];
	}

	document.getElementById("txtIdPalabraInvertida").value = palabraInvertida;

	if(palabraInvertida == palabraSinEspacios)
	{
		alert("Es pal\u00EDndromo");
	}

	else
	{
		alert("Mmm, no");
	}

	console.log("Ingresada: " + palabraIngresada);
	console.log("Sin espacios: " + palabraSinEspacios);
	console.log("Cadena invertida: " + palabraInvertida);
}
