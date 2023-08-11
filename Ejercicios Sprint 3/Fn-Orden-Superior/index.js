const cervezas0 = beers
// ejercicio 1
console.log("Ejercicio 1");
const cervezas1 = cervezas0.sort((a,b)=>b.abv-a.abv).slice(0,10)
console.log(cervezas1);
console.log("\n");

// ejercicio 2
console.log("Ejercicio 2");
const cervezas2 = cervezas0.sort((a,b)=>a.ibu-b.ibu).slice(0,10)
console.log(cervezas2);
console.log("\n");

// ejercicio 3
console.log("Ejercicio 3");
const filtro = cervezas0.filter(beer => beer.abv<10)
const cervezas3 = filtro.map(beer => {
    return {
        nombre: `${beer.name}`,
        alcohol: `${beer.abv}`,
        amargor: `${beer.ibu}`
    }
})
console.log(cervezas3);
console.log("\n");


// ejercicio 4
console.log("Ejercicio 4");
const cervezas4 = cervezas0.sort((a,b,bool) => {
    if (bool==false) {
       return a.ebc-b.ebc
    }else{
       return b.ebc-a.ebc
    }
}).slice(0,10)
console.log(cervezas4);


// ejercicio 5
console.log("Ejercicio 5");
const conteiner=document.getElementById(`conteiner`)
const mainDiv=document.createElement(`div`)
conteiner.appendChild(mainDiv)

function generarLineas(array) {
    let trs=""
    for (const element of array) {
        trs+=`<tr class="tr">
        <td>${element.name}</td>
        <td>${element.abv}</td>
        <td>${element.ibu}</td>
        </tr>`
    }
    return trs
}
const lineas=generarLineas(beers)
console.log(lineas);
function table(linea) {
    return `<table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>ABV</th>
            <th>IBU</th>
        </tr>
    </thead>
    <tbody id="tbody">
    ${linea}
    </tbody>
</table>`
}

mainDiv.innerHTML=table(lineas)









