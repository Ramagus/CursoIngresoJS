# **CursoIngresoJS**
-----
Curso de Ingreso con JavaScript

Ejercitación y TP para rendir el Examen de Ingreso 

# **UTN FRA**
## **Técnico Superior en Programación**

[Sitio WEB de GitHub](http://octaviovillegas.github.io/CursoIngresoJS/index.html)


![QR](http://octaviovillegas.github.io/CursoIngresoJS/img/qrInicio.png)
-----


### ¿Cómo está organizado?
 
* Cada concepto abordado tiene una serie de ejercicios a resolver

* Se debe realizar los ejercicios en el orden que se presentan

* Los ejercicios tienen un incremento de complejidad que acompaña la complejidad del tema abordado

* Es necesario comprender el tema anterior para continuar con los siguientes temas

* Cada tema tiene en los enunciados el objetivo que se debe cumplir


### ¿Qué debo hacer para poder programar y responder a los enunciados?
 

* :one:. Crear una cuenta en GitHub (lo más recomendable)
>Hacer FORK del repositorio


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/fork.png)


* :two:. Descargar el ZIP
>Tengas o no cuenta en GitHub, se debe descargar el .ZIP


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/bajarzip.gif)


* :three:. Utilizar un editor de texto liviano y de software libre
>Se puede utilizar el que quieran. Si no conocen ninguno, acá les paso el link de uno liviano, portable, multiplataforma y de software libre
>[SublimeText](https://www.sublimetext.com)

* :four:. Mostrar el Curso de Ingreso en el navegador de Internet
>Después de descomprimir la carpeta, ingresamos, tomamos el archivo index.html y lo abrimos/lanzamos en el navegador


### ¿Qué debo hacer para proponer mejoras o hacer consultas sobre errores ?
 
* Debo entrar en la issues **


![issues](http://octaviovillegas.github.io/CursoIngresoJS/img/issues.png)


>Este espacio de las "ISSUES" es para solucionar temas como:
>* Funcionales de la WEB
>* Consultas sobre enunciados
>* Textos con errores que imposibiliten el funcionamiento
 
:no_entry_sign: *Las consultas que **no se responden**, son las consultas sobre los algoritmos de programación*


-----
## Ingreso a la Web 


**Menú Principal**

>Una vez que tenemos todo correcto, deberíamos ver la siguiente página con el menú de acceso a todos los ejercicios
>Este menú te lleva por cada tema explorado en este Curso de Ingreso


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/principal.gif)


-----
# Entrada y Salida de Datos 
-----


**Objetivos**

* Interactuar con el usuario
* Mostrar información acorde a lo pedido
* Tomar datos como cadena de caracteres y transformarlos a número
* Manejo de porcentajes dinámicos sobre valores dinámicos


**Ejercicios del TP**

* 1-Ferrete Facturación :heavy_check_mark:
* 2-Ferrete Construción :heavy_check_mark:
* 3-Ferrete Pinturas :heavy_check_mark:


[PDF de los TPs](http://octaviovillegas.github.io/CursoIngresoJS/Guia%20de%20TPs%20curso%20de%20ingreso.pdf)


![principal](http://octaviovillegas.github.io/CursoIngresoJS/img/cjsentreadasalida.png)


-----
## Ejemplo 


```javascript

function mostrarImporteDeUnViaje()
{
   //Definición de variables
   var destino;
   var importe;
   var porcentajeDeImpuestos;
   var valorDelImpuesto;
   var importeTotal;
   
   //Entrada de Datos
   destino = prompt("Ingrese destino"); //->"La Costa Atlántica"
   porcentajeDeImpuestos = prompt("Ingrese porcentaje impositivo"); //->"25"
   porcentajeDeImpuestos = parseInt(porcentajeDeImpuestos);
   importe = document.getElementById("importe").value;
   importe = parseInt(importe);
   
   //Operaciones
   valorDelImpuesto = importe * porcentajeDeImpuestos / 100;
   importeTotal = importe + valorDelImpuesto;
   
   //Salida de Datos
   document.getElementById("resultado").value = importeTotal;
   alert("El viaje a " + destino + " tiene un costo total de $" + importeTotal);
}

```


-----
## Cuestionario 
[Cuestionario de Entrada y Salida de Datos](https://forms.gle/QY8L3362sKLCE5kx8) :point_left:


**A tener en cuenta:**

* :date: Los cuestionarios se habilitan en ciertas fechas ya estipuladas
* :no_entry_sign: Se debe contestar sin buscar en la web las respuestas
* :no_entry_sign: Se debe contestar sin realizar pruebas de código
* :passport_control: Se debe iniciar sesión en Google para ingresar a los cuestionarios
* :hand: Solo se puede contestar una vez cada cuestionario

**Las respuestas recibidas son analizadas para:**

* :exclamation: Hacer una mejora continua del curso
* :muscle: Reforzar conceptos que sean necesarios
* :mortar_board: Tener la evolución del alumno durante el curso

