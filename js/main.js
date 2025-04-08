
// document - para acceder a todo el html .getElementById para llamar a un eleemnto a partir de su ID
let btnMostrar = document.getElementById("btnMostrar")
let encabezado1 = document.getElementById("Encabezado1");
let encabezado2 = document.getElementById("Encabezado2");
let lista = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item")

let otroElemento = document.querySelector("ul>li");

let otrosElementos = document.querySelectorAll("ul>li");


console.log("otroElemento:", otroElemento );
console.log("OtrosElementos:", otrosElementos);

console.log(lista.length);
// console.log(lista[0]);
console.log(lista.item(1));

console.log(elementos.item(2));

console.log(elementos.length);
let contador = 0;
function modifica(){
// encabezado1.innerText = "<em>Ejercicio</em> DOM";
encabezado1.innerHTML += "<em>Ejercicio</em> DOM"; // ___ de la etiqueta que está almacenando lo que está dentro, etiqueta de lectura y escritura
encabezado2.innerText = ++contador 
}modifica

console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); // No hagas lo que haces por defecto

});