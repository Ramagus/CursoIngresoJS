function mostrar()
{
	let clave;

    clave = prompt("Ingrese la contrase\u00F1a");

    while(clave != "utn750") //while(!(clave == "utn750"))
    {
        clave = prompt("Contrase\u00F1a incorrecta. Reingrese");
    }

    alert("Contrase\u00F1a correcta!!!");
}
