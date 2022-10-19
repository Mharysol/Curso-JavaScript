//Listas, array o arreglo 

const lista = [1, "hola", true, undefined, null]
const lista2 = new Array (1,"hola", true, undefined, null)
const lista3 = new Array (3)
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3];  

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura:10,
    anchura:5,
    marca:"Samnsung",
    iswhite: false,
    contactos:["lean","Diego","Pelusa","Kepler"],
    tarjeta:{
        marca:"sandisk",
        almacenamiento: 32
    },

    "altura-tarjeta":4

}
movil.year = 2019;
movil.narca = "Xiaomi";

console.log(movil.tarjeta.marca)
console.log(movil.year)
console.log(movil.marca)

// Fechas   -- libreria de apoyo Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)  // utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020")  
console.log(fecha_cadena);

const dia = ahora.getDay()
const mes = ahora.getMonth() + 1
const year= ahora.getFullYear()

console.log(dia, mes, year)