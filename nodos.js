//seleccionar por nombre de etiqueta
/*let titulo = document.querySelector("h1");
console.log(titulo);
titulo.style.backgroundColor = "red";
//seleccionar por nombre de la clase 
let subtitulo1 = document.querySelector(".sub1");
subtitulo1.style.color = "green";
//seleccuibar por ID
let p2 = document.querySelector("#p2");
p2.style.fontSize = "50px";
p2.style.color = "blue";
//seleccionar una etiqueta dentro de otra 
let subtitulo = document.querySelector("span h2");
//subtitulo.style.backgroundColor = "green";
//subtitulo.style.fontSize = "60px";
//let div1 = document.querySelector("div");
//div1.style.display = "flex";
//titulo.textContent = "Hola mundo";
//seleccionar varias etiquetas 
//let ps = document.querySelectorAll("p");
//console.log(ps);
//console.log("total:" + ps.length);
//for(let i = 0; i < ps.length; i++){
//    ps[i].textContent = "Hola "+i;
//}
//ps[2].textContent = "Soy otro parrafo";
//ps[2].style.fontSize = "50px";
//crear etiquetas 
let a = document.createElement("a");
let textoA = document.createTextNode("ir a youtube");
a.appendChild(textoA);
a.setAttribute("href","https://youtube.com/")
a.setAttribute("target", "_blank");
a.textContent = "Youtube";
let textoEnlace = a.textContent;
//ubicar la etiqueta a tomando como referencia h2
subtitulo1.insertAdjacentElement("beforebegin",a);
//let body = document.body;
//body.appendChild(a);
//reemplazar una etiqueta con otra
let p3 = document.querySelector(".p3");
let h1 = document.createElement("h1");
let texto = p3.textContent;
//console.log(texto)
h1.textContent = texto;
p3.replaceWith(h1);
//eliminar una etiqueta 
h1.remove();*/

//Manipulando clases de CSS
let titulo = document.querySelector("h1");
//agregar una clase de CSS
//titulo.classList.add("color");
//eliminar una clase de CSS al elemento
//titulo.classList.remove("letra");
//alternar una clase de CSS al elemento
titulo.classList.toggle("color");
//comprobar si existe una clase en el elemento
let existeClase = titulo.classList.contains("color");
console.log("el elemento tiene la clase?" + existeClase);

let p2 = document.querySelector(".p2");
//ocultar por style
//p2.style.display = "none";
//ocultar por classlist
p2.classList.add("ocultar");