//Bifurcaciones if - else

if(true){
    console.log("Es verdadero")
}

if(false){
    console.log("Es verdadero")
} else{
    console.log("No es verdadero")
}

let saldo = 50;
let efectivo = 60;

if (efectivo < saldo){
    console.log("puedes sacar dinero")
}else{
    console.log("saldo insuficiente")
}

// if else + if else   -- estructura anidada

let nota=6;
if (nota == 5){
    console.log("tienes sobresaliente")
}else if(nota == 4){
    console.log("tienes 4")
}else if(nota == 3){
    console.log("tienes 3")
}else if(nota == 2){
    console.log("tienes 2")
}else if(nota == 1){
    console.log("tienes 1")
}else if(nota == 0){
    console.log("tienes 0")
}else{
    console.log("Ingresar nota")
}


// Setencia Switch

let notas=7;

switch (notas){
    case 5:
        console.log("tienes sobresaliente");
        break;
    case 4:
        console.log("tienes 4");
        break;
    case 3:
        console.log("tienes 3");  
        break;  
    case 2:
        console.log("tienes 2");  
        break;
    case 1:
        console.log("tienes 1");  
        break;
    case 0:
        console.log("tienes 0");
        break;  
    default:
        console.log("error");
        break;    
}