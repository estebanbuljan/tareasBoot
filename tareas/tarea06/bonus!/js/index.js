console.log(document.title);

function presionBoton(boton) {
    let nombreUno = document.getElementById("idNombre").value
    let nombreDos = document.getElementById("idNombreDos").value
    let apellidoUno = document.getElementById("idApellido").value
    let apellidoDos = document.getElementById("idApellidoDos").value

    let bNombreUno = document.getElementById("bIdNombre").value
    let bNombreDos = document.getElementById("bIdNombreDos").value
    let bApellidoUno = document.getElementById("bIdApellido").value
    let bApellidoDos = document.getElementById("bIdApellidoDos").value


    if (document.getElementById("idNombre").value == "" && document.getElementById("idNombreDos").value == "" && document.getElementById("idApellido").value == "" && document.getElementById("idApellidoDos").value == "" || document.getElementById("bIdNombre").value == "" && document.getElementById("bIdNombreDos").value == "" && document.getElementById("bIdApellido").value == "" && document.getElementById("bIdApellidoDos").value == "") {
        alert("datos recibidos, complete los campos restantes!")
    }
    else {
        if (nombreUno == bNombreUno || nombreUno == bNombreDos || nombreDos == bNombreUno || nombreDos == bNombreDos) {

            if (document.getElementById("idNombreDos").value == "" || document.getElementById("bIdNombreDos").value == "") {
                document.getElementById("idNombreDos").value = "  "
                document.getElementById("bIdNombreDos").value = "   "
            }
            if (document.getElementById("idNombre").value == document.getElementById("bIdNombre").value) {
                console.log("hubo coincidencias en los nombres!");
                let color = prompt('Se encontraron coincidencias en Nombres, ingrese un color para resaltarlos');
                document.getElementById("idNombre").style.color = color
                document.getElementById("bIdNombre").style.color = color
            }
            if (document.getElementById("idNombre").value == document.getElementById("bIdNombreDos").value) {
                console.log("hubo coincidencias en los nombres!");
                let color = prompt('Se encontraron coincidencias en Nombres, ingrese un color para resaltarlos');
                document.getElementById("idNombre").style.color = color
                document.getElementById("bIdNombreDos").style.color = color
            }
            if (document.getElementById("idNombreDos").value == document.getElementById("bIdNombre").value) {
                console.log("hubo coincidencias en los nombres!");
                let color = prompt('Se encontraron coincidencias en Nombres, ingrese un color para resaltarlos');
                document.getElementById("idNombreDos").style.color = color
                document.getElementById("bIdNombre").style.color = color
            }
            if (document.getElementById("idNombreDos").value == document.getElementById("bIdNombreDos").value) {
                console.log("hubo coincidencias en los nombres!");
                let color = prompt('Se encontraron coincidencias en Nombres, ingrese un color para resaltarlos');
                document.getElementById("idNombreDos").style.color = color
                document.getElementById("bIdNombreDos").style.color = color
            }

        }

        if (nombreUno != bNombreUno && nombreUno != bNombreDos && nombreDos != bNombreUno && nombreDos != bNombreDos) {
            console.log("no hubo coincidencias en los nombres!");
        }
        if (confirm("Desea comparar los Apellidos?") == true) {
            if (apellidoUno == bApellidoUno || apellidoUno == bApellidoDos || bApellidoDos == apellidoUno || apellidoDos == bApellidoDos) {

                if (document.getElementById("idApellidoDos").value == "" || document.getElementById("bIdApellidoDos").value == "") {
                    document.getElementById("idApellidoDos").value = " "
                    document.getElementById("bIdApellidoDos").value = "   "
                }
                if (document.getElementById("idApellido").value == document.getElementById("bIdApellido").value) {
                    console.log("hubo coincidencias en los apellidos!");
                    let color = prompt('Se encontraron coincidencias en los apellidos, ingrese un color para resaltarlos');
                    document.getElementById("idApellido").style.color = color
                    document.getElementById("bIdApellido").style.color = color
                }
                if (document.getElementById("idApellido").value == document.getElementById("bIdApellidoDos").value) {
                    console.log("hubo coincidencias en los apellidos!");
                    let color = prompt('Se encontraron coincidencias en los apellidos, ingrese un color para resaltarlos');
                    document.getElementById("idApellido").style.color = color
                    document.getElementById("bIdApellidoDos").style.color = color
                }
                if (document.getElementById("idApellidoDos").value == document.getElementById("bIdApellido").value) {
                    console.log("hubo coincidencias en los apellidos!");
                    let color = prompt('Se encontraron coincidencias en los apellidos, ingrese un color para resaltarlos');
                    document.getElementById("idApelliDos").style.color = color
                    document.getElementById("bIdApellido").style.color = color
                }
                if (document.getElementById("idApellidoDos").value == document.getElementById("bIdApellidoDos").value) {
                    console.log("hubo coincidencias en los apellidos!");
                    let color = prompt('Se encontraron coincidencias en los apellidos, ingrese un color para resaltarlos');
                    document.getElementById("idApellidoDos").style.color = color
                    document.getElementById("bIdApellidoDos").style.color = color
                }
            }
            if (apellidoUno != bApellidoUno && apellidoUno != bApellidoDos && bApellidoDos != apellidoUno) {
                console.log("no hubo coincidencias en los apellidos");
            }
        }
        nombreCompleto = nombreUno + " " + nombreDos + " " + apellidoUno + " " + apellidoDos;
        nombre = nombreCompleto.split(" " + " ").join(" ");
        nombreUno = nombre.trim();
        nombreCompletoDos = bNombreUno + " " + bNombreDos + " " + bApellidoUno + " " + bApellidoDos;
        bnombre = nombreCompletoDos.split(" " + " ").join(" ");
        bNombreUno = bnombre.trim();

        console.log(`------\nintegrante 1: "${nombreUno}"\nintegrante 2: "${bNombreUno}"\n------`);
    }

}







