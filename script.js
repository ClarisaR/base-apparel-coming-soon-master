const nodoHero = document.getElementById('hero')
const nodoInput = document.getElementById('input-email')
const nodoForm = document.getElementById('form')
const nodoMensajeError = document.getElementById('error')
const nodoIconError = document.getElementById('icon-error')


function cambiarImagen(){
    let anchoPantalla = window.innerWidth
    if(anchoPantalla>375){
        nodoHero.src = "images/hero-desktop.jpg"
    }
}

cambiarImagen()

const nodoButton = document.getElementById('button')

nodoButton.addEventListener('click', validarEmail)

function validarEmail(evento){
    evento.preventDefault()
    const email = nodoInput.value.trim()

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email == '' || !regexEmail.test(email)){
        nodoInput.focus()
        nodoInput.style.border = 'solid 1px red'
        nodoMensajeError.style.display = 'block'
        nodoIconError.style.display = 'block'
    }else{
        nodoMensajeError.style.display = 'none'
        nodoIconError.style.display = 'none'
        nodoInput.style.border = ''
        nodoInput.value = ''
    }

}