function saluda() {
    alert("Hola!");
}

function cambioButton(buton) {
    buton.innerText = "Adiós";
    buton.style.color = "blue";
}

function sobreButton(chachacha) {
    chachacha.style.backgroundColor = "purple";
}

function fueraButton(x) {
    x.style.backgroundColor = "gray";
}

function clickButton(elemento) {
    elemento.innerText = "Adiosin";
    alert("Hizo click");
}

function over(elemento) {
    elemento.style.backgroundColor = "red";
    console.log("Entro");
}

function out(elemento) {
    elemento.style.backgroundColor = "orange";
}

function cambiarText(elementoP) {
    elementoP.innerText = "Así funciona el evento hacer click";
}

function eventoDblClick(elementoH1) {
    elementoH1.innerText = "Así funciona el click doble";
}

function eventoH1(elemento) {
    var h1 = document.querySelector("h1");

    if(elemento.classList.contains("h1Clase1")) {
        h1.classList.add("h1Clase2");
        h1.innerText = "Juan Perez";
        h1.classList.remove("h1Clase1");
    } else {
        h1.classList.add("h1Clase1");
        h1.innerText = "Cynthia Castillo";
        h1.classList.remove("h1Clase2");
    }
    //h1.remove();
}

function cambiarImg() {
    //var img = document.querySelector("#imgNueva");
    img = document.getElementById("imgNueva");
    img.src = "img/gear.png";
}

var contenedor = document.getElementById("contenedor");
var clase = document.getElementsByClassName("card-header");
var imagenes = document.getElementsByTagName("img");


