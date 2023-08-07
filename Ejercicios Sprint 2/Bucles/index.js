// ejercicio 1
console.log("Ejercicio 1");
alert("Ejercicio 1")
let numIngresado = Number(prompt("Ingrese un numero:"))
for (let i = 1; i < 11; i++) {
    let valor=numIngresado*i
    console.log(`${numIngresado} X ${i} = ${valor}`);
}
console.log(`\n`);


// ejercicio 2
console.log("Ejercicio 2");
alert("Ejercicio 2")
let numAcumular = 0
let acum=0
do {
    numAcumular = Number(prompt("Ingrese numero a acumular:"))
    acum += numAcumular
    console.log(`El numero es: ${acum}`);
} while (numAcumular!=0);
console.log(`\n`);


// ejercicio 3 
console.log("Ejercicio 3");
alert("Ejercicio 3")
let intentos = 0
let numeroAdivinado = 0
if (acum>=1 && acum<=100) {
    do {
        numeroAdivinado = Number(prompt("Adivine el numero:"))
        intentos++
        if (numeroAdivinado>acum) {
            alert("El numero ingresado es mayor")
        }else if (numeroAdivinado<acum) {
            alert("El numero ingresado es menor")
        }
    } while (numeroAdivinado!=acum);
    alert(`Felicidades lo lograste en ${intentos} intentos`)
}else{"Lo lamentamos su numero no se encuentra entre 1 y 100"}
console.log(`\n`);


// ejercicio 4 
console.log("Ejercicio 4");
alert("Ejercicio 4")
let numDividir = Number(prompt("Ingrese numero que quiera conocer sus divisores:"))
for (let i = 1; i<=numDividir ;i++) {
    if (numDividir % i == 0) {
        console.log(`Divisor: ${i}`);
    }

}
console.log(`\n`);


//ejercicio 5
console.log("Ejercicio 5");
const array5=[1,2,3,4,5,6,7,8,9,10]
for (const element of array5) {
    console.log(`elemento ${element}`);
}
console.log(`\n`);


// ejercicio 6
console.log("Ejercicio 6");
const array6=[2,3,4,5,6,7,8,9,10,11]
for (const element of array6) {
    console.log(`elemento ${element*2}`);
}
console.log(`\n`);


// ejercicio 7
console.log("Ejercicio 7");
const array7 = [
    {
        nombre:"Juan",
        apellido:"Gonzales",
        altura: 1.78,
        edad: 24,
    },
    {
        nombre:"Andres",
        apellido:"Gonzales",
        altura: 1.85,
        edad: 27,
    },
    {
        nombre:"Maria",
        apellido:"Gonzales",
        altura: 1.78,
        edad: 22,
    },
    {
        nombre:"Hernan",
        apellido:"Gonzales",
        altura: 1.9,
        edad: 23,
    },
    {
        nombre:"Esteban",
        apellido:"Gonzales",
        altura: 1.8,
        edad: 15,
    }
]

    for (const propiedad of array7) {
        console.log(`Me llamo ${propiedad.nombre} ${propiedad.apellido}, mido ${propiedad.altura} y tengo ${propiedad.edad}`);
    }
console.log(`\n`);


// ejercicio 8
console.log("Ejercicio 8");
const array8 = [22,23,24,25,26,27,28,29,30,31]
for (const array of array8) {
    if (array % 2 != 0) {
        console.log(`${array} es par`);
    }
}
console.log(`\n`);


// ejercicio 9
alert("Ejercicio 9")
console.log("Ejercicio 9");
let num = 0
let pares = 0
let impares = 0
do {
    num = Number(prompt("Ingrese valor:"))
    if (num % 2 == 0) {
        pares+=num
        console.log(`acumulador pares: ${pares}`);
    }else{
        impares+=num
        console.log(`acumulador impares: ${impares}`);
    }
} while (num!=0);
console.log(`La suma de los pares es ${pares} y la de los impares ${impares}`);
console.log(`\n`);


// ejercicio 10 
alert("Ejercicio 10")
console.log("Ejercicio 10");
const array10 = [78,79,80,81,82,83,89,85,86,87]
let mayor = array10[0]
for (const array of array10) {
    if (mayor<array) {
        mayor=array
    }
}
console.log(array10);
alert(`El mayor es el ${mayor}`)
