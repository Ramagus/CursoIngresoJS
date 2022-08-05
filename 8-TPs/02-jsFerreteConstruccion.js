function rectangulo() 
{
    let ancho;
    let largo;
    let perimetro;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert(`Se necesitan comprar ${alambre.toFixed(2)} metros de alambre`);
}

function circulo() 
{
    let perimetro;
    let radio;
    let alambre;

    const PI = 3.14;

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    
    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert(`Se necesitan comprar ${alambre.toFixed(2)} metros de alambre`);
}

function materiales() 
{
	let ancho;
    let largo;
    let area;

    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    cemento = area * CEMENTO_X_METRO;
    cal = area * CAL_X_METRO;

    alert(`Para un contrapiso de ${area.toFixed(2)}m2, se necesitan comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}
