const spanText = document.getElementById('spanText')
const buttonPresent = document.getElementById('buttonPresent')
let character
let characterShown
let saveCharacter

//Cambia el texto de la Presentación según en personaje seleccionado
function showPresentation(name){
    switch (name) {
        case 'mario':
            spanText.textContent= "Mario"
            break;
        case 'luigi':
            spanText.textContent= "Luigi"
            break;
        case 'bowser' || 'Bowser':
            spanText.textContent="Bowser Morton Koopa"
            break;
        case 'peach' || 'Peach':
            spanText.textContent="Princesa Peach Toadstool"
            break;
        case 'yoshi' || 'Yoshi':
            spanText.textContent="T. Yoshisaur Munchakoopas"
            break;
        case 'toad' || 'Toad':
            spanText.textContent="Toad"
            break;
        case 'toadette' || 'Toadette':
            spanText.textContent="Toadette"
            break;
        case 'daisy' || 'Daisy':
            spanText.textContent="Princesa Daisy"
            break; 
        characterShown = name
        console.log(characterShown)
    } 
}


//Muestra el personaje elegido mediante Prompt
function chooseCharacter(){
    if(buttonPresent.classList.contains('buttonInactive')){
    buttonPresent.classList.remove('buttonInactive')
    buttonPresent.classList.add('buttonActivo')

    }
    else{
        buttonPresent.classList.remove('buttonActive')
        buttonPresent.classList.add('buttonInactive')
    }
    
    character = prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)')

    if(characterShown != null && character != characterShown){
        document.getElementById(characterShown).removeAttribute('title',"Presentado" )
    }
    
    showPresentation(character.toLocaleLowerCase())

    if(document.getElementById(character.toLocaleLowerCase()) != null 
        || document.getElementById(character.toLocaleLowerCase()) != ""){
        saveCharacter = character.toLocaleLowerCase()
        characterShown = character.toLocaleLowerCase()
        console.log(saveCharacter)
        document.getElementById(saveCharacter).setAttribute('title',"Presentado" )
    }
    else{
        alert("Personaje no encontrado")
    }

}


//Muestra el personaje clickeado
let activeCharacter = "";
function showCharacter(nameCharacter){
    
    showPresentation(nameCharacter)

    if(activeCharacter != "" && nameCharacter != activeCharacter){
        document.getElementById(activeCharacter).removeAttribute('title',"Presentado" )
    }

    let divCharacter= document.getElementById(nameCharacter)
    activeCharacter=nameCharacter

    if(divCharacter.getAttribute('title')=="Presentado"){
        divCharacter.removeAttribute('title',"Presentado") 
        spanText.textContent= ""
    }
    else{
        divCharacter.setAttribute('title',"Presentado" )
    }  
}














