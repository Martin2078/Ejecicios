
// Ejercio 1
console.log("Ejercicio 1");
function saludar(nombre){
    console.log(`Hola ${nombre} es un placer tener aqui!!`);
}

saludar("Martin");
console.log("\n");

// Ejercicio 2
console.log("Ejercicio 2");
function multiplicar(numero,numero2){
    let resultado = numero * numero2;
    return resultado
}
console.log(multiplicar(5,3)); 
console.log("\n");

// Ejercicio 3
console.log("Ejercicio 3");
function areaTriangulo(base,altura){
    let area = (base*altura)/2;
    return area
}
function perimetroTriangulo(lado1,lado2,lado3){
    let perimetro = lado1+lado2+lado3;
    return perimetro
}
console.log(`El area del triangulo es de: ${areaTriangulo(5,3)}`);
console.log(`El perimetro del triangulo es de: ${perimetroTriangulo(4,5,6)}`);
console.log("\n");

// Ejercicio 4
console.log("Ejercicio 4");
function calcularPrecio(precio,cantidad){
    let total = precio*cantidad;
    if(cantidad>=20){
        total*=0.8;
    }
    return total
}
console.log(`El valor total es de: $${calcularPrecio(20,20)}`);
console.log("\n");

// Ejercicio 5
console.log("Ejercicio 5");
function esMayorDeEdad(edad){
    if(edad>=18){
        console.log("Eres mayor de edad");
    }else{
        console.log("Eres menor de edad");
    }
}
esMayorDeEdad(18)
console.log("\n");

// Ejercicio 6
console.log("Ejercicio 6");
function calcularImpuesto(ingresoAnual){
    let impuesto=0
    if(ingresoAnual<=10000){
        impuesto= ingresoAnual*0.1;
    }else if(ingresoAnual>10000 && ingresoAnual<=20000){
        impuesto= ingresoAnual*0.15;
    }else{
        impuesto= ingresoAnual*0.2;
    }
    return impuesto
}
console.log(`El valor del impuesto con un ingreso anual menor a $10000($9000) es de: $${calcularImpuesto(9000)}`);
console.log(`El valor del impuesto con un ingreso anual mayor a $10000 pero menor o igual a $20000 ($15000) es de: $${calcularImpuesto(15000)}`);
console.log(`El valor del impuesto con un ingreso anual igual a $20000 es de: $${calcularImpuesto(20000)}`);
console.log(`El valor del impuesto con un ingreso anual mayor a $20000($21000) es de: $${calcularImpuesto(21000)}`);
console.log("\n");

// Ejercicio 7
console.log("Ejercicio 7");
function verificarDia(dia){

    switch(dia){
            case 1:
                console.log("Es un día laboral");
            break;

            case 2:
                console.log("Es un día laboral");
            break;

            case 3:
                console.log("Es un día laboral");
            break;

            case 4:
                console.log("Es un día laboral");
            break;

            case 5:
                console.log("Es un día laboral");
            break;

            case 6:
                console.log("Es fin de semana");
            break;

            case 7:
                console.log("Es fin de semana");
            break;
            
    }
}

verificarDia(6);
