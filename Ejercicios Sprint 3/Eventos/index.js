// Ejercicio 1
const cuadrado = document.getElementById(`square`)
const boton = document.getElementById(`button`)
cuadrado.textContent = "GREY"

function cambiarColor(){

    if (cuadrado.classList=="bg-secondary") {
        cuadrado.classList.remove(`bg-secondary`)
        cuadrado.classList.add(`bg-info`)
        cuadrado.textContent = "BLUE"
    }
    else if(cuadrado.classList=="bg-info"){
        cuadrado.classList.remove(`bg-info`)
        cuadrado.classList.add(`bg-danger`)
        cuadrado.textContent = "RED"
    }
    else if(cuadrado.classList=="bg-danger"){
        cuadrado.classList.remove(`bg-danger`)
        cuadrado.classList.add(`bg-secondary`)
        cuadrado.textContent = "GREY"
    }
}

boton.addEventListener(`click`,cambiarColor)



// Ejercicio 2
const boton2 = document.getElementById(`button2`)
const cuadrado2 = document.getElementById(`square2`)
const input = document.getElementById(`input-text`)

function textoCuadrado(){
    cuadrado2.innerHTML=input.value
}

input.addEventListener("keyup",textoCuadrado)
function reset(){
    cuadrado2.innerHTML=""
    input.value=""
}
boton2.addEventListener("click",reset)



// Ejercicio 3
const kgInput=document.getElementById(`input-kg`)
const cmInput=document.getElementById(`input-cm`)
const botonCalcular=document.getElementById(`buttonResults`)
const results=document.getElementById(`input-show-results`)

function calcularIC() {
    let IMC=kgInput.value/((cmInput.value/100)*(cmInput.value/100))
    results.value= IMC
}
botonCalcular.addEventListener(`click`,calcularIC)




// Ejercicio 4
const valorDolarHoy=500
const peso = document.getElementById(`input-peso`)
const dolar = document.getElementById(`input-dolar`)

function pesoAdolar() {
    let conversion= peso.value/500
    dolar.value=conversion
}

function dolarApeso() {
    let conversion= dolar.value*500
    peso.value=conversion
}

peso.addEventListener(`keyup`,pesoAdolar)
dolar.addEventListener(`keyup`,dolarApeso)