function mostrar()
{
	let sexo;

    sexo = prompt("Ingrese sexo").toLowerCase();

    while(sexo != "f" && sexo != "m") //while(!(sexo == "f" || sexo == "m"))
    {
        sexo = prompt("Error. Solo f o m").toLowerCase();   
    }

    document.getElementById("txtIdSexo").value = sexo;
}
