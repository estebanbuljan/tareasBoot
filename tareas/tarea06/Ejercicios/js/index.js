
console.log(document.title);


//////////////////////////////////////////////////////////////////////////////////


nombreUno = document.getElementById("idnombre1").textContent;
nombreDos = document.getElementById("idnombre2").textContent;
apellidoUno = document.getElementById("idapellido1").textContent;
apellidoDos = document.getElementById("idapellido2").textContent;

bnombreUno = document.getElementById("bidnombre1").textContent;
bnombreDos = document.getElementById("bidnombre2").textContent;
bapellidoUno = document.getElementById("bidapellido1").textContent;
bapellidoDos = document.getElementById("bidapellido2").textContent;

var nombreCompleto = nombreUno + " " + nombreDos + " " + apellidoUno + " " + apellidoDos;
var bnombreCompleto = bnombreUno + " " + bnombreDos + " " + bapellidoUno + " " + bapellidoDos;
let nombre;
let bnombre;
let int1;
let int2;
let linea = "-----";
nombre = nombreCompleto.split(" " + " ").join(" ");
nombre = nombre.trim();

bnombre = bnombreCompleto.split(" " + " ").join(" ");
bnombre = bnombre.trim();



int1 = "Integrante 1:" + '"' + nombre + '"';
int2 = "Integrante 2:" + '"' + bnombre + '"';

console.log(`${linea}\n${int1}\n${int2}\n${linea}`);

//////////////////////////////////////////////////////////////////////////////////////////////////
let coincidenciaUno = nombreUno === bnombreUno;
let coincidenciaDos = nombreUno === bnombreDos;
let coincidenciaTres = nombreDos === bnombreUno;
let coincidenciaCuatro = nombreDos === bnombreDos;

if (((coincidenciaUno === true) & (nombreUno != "")) || ((coincidenciaDos === true) & (bnombreDos != "")) || ((coincidenciaTres === true) & (nombreDos != "")) || ((coincidenciaCuatro === true) & (bnombreDos != ""))) {
    console.log('Se encontraron coincidencias en algunos de los Nombres de los Integrantes!!!');
    var color = prompt('Se encontraron coinsidencias en Nombres, ingrese un color para resaltar los Nombres ("red", "#c4203f", etc)');

} else {
    console.log('No se encontraron coincidencias en los Nombres de los Integrantes');

}


if (coincidenciaUno) {
    nombreUno = document.getElementById("idnombre1");
    nombreUno.style.color = color;
    bnombreUno = document.getElementById("bidnombre1");
    bnombreUno.style.color = color;
}
if (coincidenciaDos) {
    nombreUno = document.getElementById("idnombre1");
    nombreUno.style.color = color;
    bnombreDos = document.getElementById("bidnombre2");
    bnombreDos.style.color = color;

}
if (coincidenciaTres) {
    nombreDos = document.getElementById("idnombre2");
    nombreDos.style.color = color;
    bnombreUno = document.getElementById("bidnombre1");
    bnombreUno.style.color = color;

}
if (coincidenciaCuatro) {
    nombreDos = document.getElementById("idnombre2");
    nombreDos.style.color = color;
    bnombreDos = document.getElementById("bidnombre2");
    bnombreDos.style.color = color;
}

//////////////////////////////////////////////////////////////////////////////


let coinUno = apellidoUno == bapellidoUno;
let coinDos = apellidoUno == bapellidoDos;
let coinTres = apellidoDos == bapellidoUno;
let coinCuatro = apellidoDos == bapellidoDos;

if (confirm("Desea comparar los Apellidos?") == true) {

    if (((coinUno === true) & (apellidoUno != "")) || ((coinDos === true) & (bapellidoDos != "")) || ((coinTres === true) & (apellidoDos != "")) || ((coinCuatro === true) & (bapellidoDos != ""))) {
        console.log('Se encontraron coincidencias en algunos de los Apelidos de los Integrantes!!!');
        var colorA = prompt('Se encontraron coinsidencias en Apellidos, ingrese un color para resaltar los Apellidos ("red", "#c4203f", etc)');

    } else {
        console.log('No se encontraron coincidencias en los Apellidos de los Integrantes');

    }


    if (coinUno) {
        apellidoUno = document.getElementById("idapellido1");
        apellidoUno.style.color = colorA;
        bapellidoUno = document.getElementById("bidapellido1");
        bapellidoUno.style.color = colorA;
    }
    if (coinDos) {
        apellidoUno = document.getElementById("idapellido1");
        apellidoUno.style.color = colorA;
        bapellidoDos = document.getElementById("bidapellido2");
        bapellidoDos.style.color = colorA;

    }
    if (coinTres) {
        apellidoDos = document.getElementById("idapellido2");
        apellidoDos.style.color = colorA;
        bapellidoUno = document.getElementById("bidapellido1");
        bapellidoUno.style.color = colorA;

    }
    if (coinCuatro) {
        apellidoDos = document.getElementById("idapellido2");
        apellidoDos.style.color = colorA;
        bapellidoDos = document.getElementById("bidapellido2");
        bapellidoDos.style.color = colorA;
    }

}





