let miNombre = 'Martin'
let miApellido = 'Galan'
let miEdad = 18
let miMascota = 'Reyna'
let edadMascota = 3

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

let nombreCompleto = `${miNombre} ${miApellido}`
console.log(nombreCompleto);

let textoPresentacion= "Hola mi nombre completo es ${nombreCompleto} y tengo ${nombreCompleto} .Tambien tengo una mascota llamada ${nombreCompleto} de ${nombreCompleto} "
console.log(textoPresentacion);


let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

const alumno={
    nombre:"Martin",
    apellido:"Galan",
    edad:18,
    cantidadMascotas:2,
    signo:"Sagitario",
}

console.table(alumno)
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.cantidadMascotas);
console.log(alumno.signo);


const mascota={
    nombre:"Reyna",
    tipo:"Gato",
    colores:["Blanco" , "Negro"],
    edad:3,
    tamaño:"Mediano",
}
console.table(mascota)
console.log(mascota.nombre);
console.log(mascota.tipo);
console.log(mascota.colores[0]);
console.log(mascota.colores[1]);
console.log(mascota.edad);
console.log(mascota.tamaño);

const frutas=["Manzana","Banana","Pera","Frutilla","Naranja"]
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

let soyMayorDeEdad = prompt("Ingrese Edad:")
if(soyMayorDeEdad>=18){
    alert("Soy mayor de edad")
}
else{
    alert("Soy menor de edad")
}

const numeros=[1,2,3,4,5]
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

const familia=["Mesa","Estufa","Plato","Escritorio","Heladera"]

let textoAleatorio= `En la ${familia[4]} tengo ${numeros[3]} ${frutas[1]}s  `
console.log(textoAleatorio);

let edadCompañero=prompt("Ingrese la edad de su compañero")

if(soyMayorDeEdad<edadCompañero){
    console.log("Mi edad es menor a la de mi compañero: true");
    console.log("Mi edad es igual a la de mi compañero: false");
    console.log("Mi edad es mayor a la de mi compañero: false");
}
else if(soyMayorDeEdad>edadCompañero){
    console.log("Mi edad es menor a la de mi compañero: false" );
    console.log("Mi edad es igual a la de mi compañero: false" );
    console.log("Mi edad es mayor a la de mi compañero: true");
}
else{
    console.log("Mi edad es menor a la de mi compañero: false");
    console.log("Mi edad es igual a la de mi compañero: true");
    console.log("Mi edad es mayor a la de mi compañero: false");
}

let edad= prompt("Ingrese edad:")
let altura = prompt("Ingrese altura (cm):")
let puedeSubir

if(edad>6 && altura>120){
     puedeSubir =  true    
}
else{
     puedeSubir= false
}

console.log(`Puede subir a la atracción: ${puedeSubir}`);

let pase = prompt("Ingrese pase:")
let saldo = prompt("Ingrese saldo:")
let puedePasar=0

if( (pase==`VIP`) || (saldo > 1000)){
    puedePasar=true
}
else{
    puedePasar = false
}

console.log(`La persona puede pasar: ${puedePasar}`);
