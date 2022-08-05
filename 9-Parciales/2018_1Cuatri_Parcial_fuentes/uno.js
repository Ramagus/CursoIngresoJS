function mostrar()
{   
    let ancho;
    let largo;
    let perimetro;

    ancho = parseFloat(prompt("Ingrese el ancho"));
    largo = parseFloat(prompt("Ingrese el largo"));

    perimetro = ancho * 2 + largo * 2;

    alert(`El per\u00EDmetro del rect\u00E1ngulo es ${perimetro}`);
}
