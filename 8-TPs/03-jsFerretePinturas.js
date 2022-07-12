function fahrenheitCentigrados() 
{
    let tempF;
    let tempC;

    tempF = parseFloat(document.getElementById("txtIdTemperatura").value);

    if(isNaN(tempF))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        tempC = (tempF - 32) / 1.8;

        alert(`${tempF.toFixed(1)} grados Fahrenheit equivalen a ${tempC.toFixed(1)} grados Cent\u00EDgrados`);
    }
}

function centigradosFahrenheit() 
{
	let tempF;
    let tempC;

    tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

    if(isNaN(tempC))
    {
        alert("Error. Solo n\u00FAmero");
    }

    else
    {
        tempF = tempC * 1.8 + 32;

        alert(`${tempC.toFixed(1)} grados Cent\u00EDgrados equivalen a ${tempF.toFixed(1)} grados Fahrenheit`);
    }
}
