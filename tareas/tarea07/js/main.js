//callback asociado al evento DOMContentLoaded de document
window.addEventListener("DOMContentLoaded", () => {
    console.log("Contenido del DOM cargado");
    
    //Cargar desde JS el value del textarea
    
        let textarea = document.getElementById("origen");
        textarea.value =
            "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
        //   console.log(textarea);
    
        //Obtener un HTMLCollection con todos los input de la página y cambiar a false su propiedad disabled también el botón
    
        textarea.addEventListener("input", () => {
            let inputs = document.getElementsByTagName("input");
            for (let inp = 0; inp < inputs.length; inp++) {
                inputs[inp].disabled = false;
            }
            let minusculas = document.getElementsByTagName("button")[0];
            minusculas.disabled = false;
        });
        // Botón reemplazar
    
        let remplazar = document.getElementsByTagName("input")[0];
        remplazar.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = textarea.value
        })
    
        // Botón agregar
        let agregar = document.getElementsByTagName("input")[1];
        agregar.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = textarea.value + textarea.innerHTML
        })
    
        // Botón "Agregar 5 veces": agrega 5 veces el contenido del textarea origen al contenido del div destino.
        let agregar5Veces = document.getElementsByTagName("input")[2];
        agregar5Veces.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(5)
        })
        // Botón Agregar 10 veces
        let agregar10Veces = document.getElementsByTagName("input")[3];
        agregar10Veces.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(10)
        })
    
        // Botón Agregar n veces
        let agregarNveces = document.getElementsByTagName("input")[4];
        agregarNveces.addEventListener("click", () => {
            let Nveces = prompt("Ingresa cuantas veces quieres que repita el texto en numeros")
            let destino = document.getElementById("destino")
            destino.innerHTML = (textarea.value + textarea.innerHTML).repeat(Nveces)
        })
        // Botón Vaciar
        let vaciar = document.getElementsByTagName("input")[5];
        vaciar.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = ""
        })
    
        //Convertir a mayúscula
        let botonConvertirAMayusculas = document.getElementsByTagName("input")[6];
        botonConvertirAMayusculas.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = destino.innerHTML.toUpperCase()
        })
    
        //Convertir a minúscula
        let minusculas = document.getElementsByTagName("button")[0]
        minusculas.addEventListener("click", () => {
            let destino = document.getElementById("destino")
            destino.innerHTML = destino.innerHTML.toLowerCase()
        })
    
        //Obtener un HTMLCollection y agregar al inicio de su contenido el texto ok.
        const allLi = document.getElementsByTagName("li")
        for (let li = 0; li < allLi.length; li++) {
            let cadaTexto = allLi[li].innerHTML
            allLi[li].innerHTML = "[Ok]" + cadaTexto
        }
    });