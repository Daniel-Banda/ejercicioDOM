
// document - para acceder a todo el html .getElementById para llamar a un eleemnto a partir de su ID
let btnMostrar = document.getElementById("btnMostrar")
let encabezado1 = document.getElementById("Encabezado1");
let encabezado2 = document.getElementById("Encabezado2");
let lista = document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

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

// console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); // No hagas lo que haces por defecto

    let element = document.createElement("li");
    element.innerText="Another item"; 
    element.classList.add("list-group-item"); 

    let element2 = element.cloneNode(true);

    // lista.item(0).before(element);
    // lista.item(0).prepend(element2);

    // lista.item(0).append(element);
    // lista.item(0).after(element2);


    // lista.item(1).insertAdjacentElement("afterbegin", element)
    // lista.item(1).insertAdjacentElement("beforeend", element2)

    lista.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">Before Begin item</li>`);

    lista.item(1).insertAdjacentHTML("afterend",
            `<li class="list-group-item">
            After End item</li>`);

    lista.item(1).insertAdjacentHTML("afterbegin",
                `<li class="list-group-item">
                After Begin item</li>`);

    lista.item(1).insertAdjacentHTML("beforeend",
                    `<li class="list-group-item">
                    Before End Item</li>`);
});


window.addEventListener("load",function(event){

    console.log("Se terminó de cargar la página");

})

function txtToUpper(event){
    event.preventDefault();
    event.target.value =event.target.value.trim().toUpperCase();

}

txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);
    // txtRFC.value = txtRFC.value.toUpperCase();

txtTelefono.addEventListener("blur", function (event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);

})