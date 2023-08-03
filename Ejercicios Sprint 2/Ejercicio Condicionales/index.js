// Ejercicio 1
console.log("Ejercicio 1");
function mayorNum(num1,num2){
    if(num1>num2){
        console.log("El primer numero es mayor que el segundo");
    }else{
        console.log("El segundo es mayor que el primero");
    }
}
mayorNum(3,2)
console.log("\n");


// Ejercicio 2
console.log("Ejercicio 2");
function igualesOdiferente(num1,num2){
    if(num1 == num2){
        console.log("Los 2 numeros son iguales");
    }else {
        console.log("Los 2 numeros son diferentes");
    }
}
igualesOdiferente(2,1)
console.log("\n");


// Ejercicio 3
console.log("Ejercicio 3");
function mayorOigual(numero1,numero2)
{
    if(numero1>numero2){
        console.log("El numero 1 es mayor al numero 2");
    }else if(numero2>numero1){
        console.log("El numero 2 es mayor al numero 1");
    }else if(numero1==numero2){
        console.log("Los 2 numero son iguales");
    }
}
mayorOigual(2,2)
console.log("\n");


// Ejercicio 4
    alert("Ejercicio 4");
    let num1 = Number(prompt("Ingrese Primer numero:"));
    let num2 = Number(prompt("Ingrese Segundo numero:"));
    let num3 = Number(prompt("Ingrese Tercer numero:"));

    if(num1<num2 && num1<num3){
        alert("El primer valor es el mas chico");
    }
    else if(num2<num1 && num2<num3){
        alert("El segundo valor es el mas chico");
    }
    else if(num3<num1 && num3<num2){
        alert("El tercer valor es el mas chico");
    }
    else if(num1==num2 && num2==num3){
        alert("Son todos iguales");
    }else if(num1==num2 && num3>num2 && num3>num1){
        alert("El primer y segundo numero son iguales y mas chicos que el tercer");
    }else if(num2==num3 && num1>num2 && num1>num3){
        alert("El segundo y tercer numero son iguales y mas chicos que el primero");
    }else if(num1==num3 && num2>num1 && num2>num3){
        alert("El primer y tercer numero son iguales y mas chicos que el segundo");
    }



// Ejercicio 5
alert("Ejercicio 5");
function compararObjetos(objeto1,objeto2){
    if(objeto1.altura>objeto2.altura){
        alert("La primer persona es mas alta");
    }else{
        alert("La segunda persona es mas alta");
    }

    if (objeto1.edad>objeto2.edad) {
        alert("La primer persona es mayor");
    }else{
        alert("La segunda persona es mayor");
    }
}

const persona1={
    nombre: "Martin",
    edad: 18,
    altura:173,
}
const persona2={
    nombre: "Roberto",
    edad: 22,
    altura:170,
}
compararObjetos(persona1,persona2)
console.log("\n");






// Ejercicio 6
    alert("Ejercicio 6");
    let nombre = prompt("Ingrese su nombre:");
    let edad = Number(prompt("Ingrese su edad:"));
    let altura = Number(prompt("Ingrese su altura:"));
    let vision = Number(prompt("Ingrese su vision:"));

    if(edad>=18 && altura>150 && 8<=vision<=10){
        alert("Estas capacitado para conducir")
    }else{
        alert("No estas capacitado para conducir")
    }


// Ejercicio 7
    alert("Ejercicio 7");
    let nombreCliente = prompt("Ingrese nombre del cliente:");
    let pase = prompt("Ingrese pase:");
    let entrada = prompt("¿Posee entrada? si/no");
    let comprar;

    if((nombreCliente=="martin" ||nombreCliente=="Martin" ||nombreCliente=="MARTIN") || (pase=="vip"||pase=="VIP")){
        alert(`Bienvenido ${nombreCliente} tienes ingreso libre!!`)
    }
    else if(entrada=="si"||entrada=="SI"){

        let utilizar = prompt("¿desea utilizarla? si/no");

            if(utilizar=="si"||utilizar=="SI"){
                alert(`Bienvenido ${nombreCliente}!`)
            }else{
                alert("Hasta la proxima!")
            }
        }          
    else{
        comprar=prompt("¿desea comprar? si/no")
            if(comprar=="si"||comprar=="SI"){
                let dinero = prompt("¿Posee $1000 o mas de dinero disponible? si/no")
                    if(dinero=="si"||"SI"){
                        alert("Felicidades, tu compra se a realizado correctamente!!");
                        alert(`Bienvenido ${nombreCliente}!`);
                    }else{
                        alert("Lo lamentamos, no posee dinero suficiente!");
                    }
            }
            else{
                alert("Lo sentimos no puede ingresar sin entrada!")
            }
    }


// Ejercicio 8
alert("Ejercicio 8");
let numeroIncognita= 7;
let intentos=1;
let numeroIngresado;

if(numeroIngresado!=numeroIncognita)
{
    numeroIngresado=Number(prompt("Adivine el numero incognita (entre 1 y 10):"));
    if (numeroIngresado!=numeroIncognita) {
            if(numeroIngresado<numeroIncognita){
                alert("El numero ingresado es menor, vuelve a intentarlo");
            }else if(numeroIngresado>numeroIncognita)
            {
                alert("El numero ingresado es mayor, vuelve a intentarlo");
            }
    }
    else{
        alert("Ganaste, has adivinado el número.");
    }
    numeroIngresado=Number(prompt("Adivine el numero incognita (entre 1 y 10):"));
    if (numeroIngresado!=numeroIncognita) {
            if(numeroIngresado<numeroIncognita){
                alert("El numero ingresado es menor, vuelve a intentarlo");
            }else if(numeroIngresado>numeroIncognita)
            {
                alert("El numero ingresado es mayor, vuelve a intentarlo");
            }
    }
    else{
        alert("Ganaste, has adivinado el número.");
    }
    numeroIngresado=Number(prompt("Adivine el numero incognita (entre 1 y 10):"));
    if (numeroIngresado!=numeroIncognita) {
            if(numeroIngresado<numeroIncognita){
                alert("El numero ingresado es menor, vuelve a intentarlo");
            }else if(numeroIngresado>numeroIncognita)
            {
                alert("El numero ingresado es mayor, vuelve a intentarlo");
            }
    }
    else{
        alert("Ganaste, has adivinado el número.");
    }
}


// Ejercicio 9
alert("Ejercicio 9");
let edad9=Number(prompt("Ingrese su edad:"))
if(edad9<=12){
    alert("Eres un Infante")
}else if(edad9>=13 && edad9<=18){
    alert("Eres un adolescente")
}else if (edad9>=19 && edad9<=45) {
    alert("Eres un mayor jover")
}else if(edad9>=100){
    let mas100=prompt("¿De verdad tienes esa edad? si/no")
    if (mas100=="si" || mas100=="SI") {
        alert("Wow!")
    }
}else{
    alert("Eres un anciano")
}


// Ejercicio 10
alert("Ejercicio 10");
alert("Por favor, Escriba a continuacion el nombre en MAYUSCULAS!")
let jugador1=prompt("PIEDRA - PAPEL -TIJERA:")
let jugador2=prompt("PIEDRA - PAPEL -TIJERA:")

if (jugador1=="PIEDRA" && jugador2=="TIJERA") {
    alert("El jugador 1 es el ganador!")
}else if (jugador1=="PIEDRA" && jugador2=="PAPEL") {
    alert("El jugador 2 es el ganador!")
}else if (jugador1=="PIEDRA" && jugador2=="PIEDRA") {
    alert("EMPATE!")
}else if (jugador1=="PAPEL" && jugador2=="TIJERA") {
    alert("El jugador 2 es el ganador!")
}else if (jugador1=="PAPEL" && jugador2=="PIEDRA") {
    alert("El jugador 1 es el ganador!")
}else if (jugador1=="PAPEL" && jugador2=="PAPEL") {
    alert("EMPATE!")
}else if (jugador1=="TIJERA" && jugador2=="PAPEL") {
    alert("El jugador 1 es el ganador!")
}else if (jugador1=="TIJERA" && jugador2=="PIEDRA") {
    alert("El jugador 2 es el ganador!")
}else if (jugador1=="TIJERA" && jugador2=="TIJERA") {
    alert("EMPATE!")
}else{
    alert("UNO DE LOS JUGADORES HIZO TRAMPA!")
}


// Ejercicio 11
alert("Ejercicio 11");
alert("Por favor, Ingrese los valores en MAYUSCULAS!")
let colorIngresado=prompt("Ingrese un color:")
switch (colorIngresado) {
        case "BLANCO":
            alert("Falta de color")
        break;

        case "NEGRO":
            alert("Falta de color")
        break;
                
        case "VERDE":
            alert("El color de la naturaleza")
        break;
                
        case "AZUL":
            alert("El color del agua")
        break;
                
        case "AMARILLO":
            alert("El color del sol")
        break;
                
        case "ROJO":
            alert("El color del fuego")
        break;
                
        case "MARRON":
            alert("El color de la tierra")
        break;
    default:
        alert("Excelente eleccion, no lo teniamos pensado")
        break;
}


// Ejercicio 12
alert("Ejercicio 12");
let valorIngresado=Number(prompt("Ingrese primer valor numerico:"))
let valorIngresado2=Number(prompt("Ingrese primer valor numerico:"))
let operacion=prompt("Ingrese la operacion:")
let resultadoOperacion=0
if (operacion=="suma" || operacion=="SUMA") {
    resultadoOperacion=valorIngresado+valorIngresado2
    alert(`${resultadoOperacion}`)
}else if (operacion=="resta" || operacion=="RESTA") {
    resultadoOperacion=valorIngresado-valorIngresado2
    alert(`${resultadoOperacion}`)
}else if (operacion=="multiplicacion" || operacion=="MULTIPLICACION") {
    resultadoOperacion=valorIngresado*valorIngresado2
    alert(`${resultadoOperacion}`)
}else if (operacion=="division" || operacion=="DIVISION") {
    if (valorIngresado==0 || valorIngresado2==0) {
        alert("ERROR")
    }else{
        resultadoOperacion=valorIngresado/valorIngresado2
        alert(`${resultadoOperacion}`)
    }
}


// Ejercicio 13
alert("Ejercicio 13");
let Apellido=prompt("Ingrese su apellido:")
let Nombre=prompt("Ingrese su nombre:")
let Sexo=prompt("Ingrese su sexo:")
let Nacionalidad=prompt("Ingrese su nacionalidad:")
let Fechadenacimiento=prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa):")
let nrodocumento=prompt("Ingrese su numero de DNI (xxxxxxx) sin utilizar . :")

alert(`Nombre:${Nombre} 
Apellido ${Apellido} 
Sexo: ${Sexo}  
Nacionalidad: ${Nacionalidad}  
Fecha de Nacimiento: ${Fechadenacimiento}
DNI: ${nrodocumento}`)
let confirmar=prompt("¿Los datos mostrados anteriormente son correctos? si/no")
if (confirmar=="si" || confirmar=="SI") {

    const DNI = {
        nombreDNI:`${Nombre}`,
        apellidoDNI:`${Apellido}`,
        sexoDNI:`${Sexo}`,
        nacionalidadDNI:`${Nacionalidad}`,
        fechadenacimientoDNI: `${Fechadenacimiento}`,
        numeroDNI:`${nrodocumento}`,
    }
    alert("Felicidades su registro fue exitoso!");
    console.table(DNI)
}else{
    alert("Vuelva a intentarlo en 1 mes");
}











