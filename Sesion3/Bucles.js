

// Bucles


for (let i =0; i < 10; i ++){
console.log (i)
}

let lista = [1,4,5,6,7,3]
for (let i =0; i < lista.length; i ++ ){
    console.log (lista[i]*2)
}


// estructura For of 
for (let valor of lista ){
    console.log (valor)
}


// forEach

lista.forEach (valor => { console.log (valor)})

// for 

let persona ={
    nombre:"Sol",
    apellido:"prieto",
    edad:32,
    isdeveloper:true,
}
let prop="edad";
console.log (persona[prop])

for (let propiedad in persona){
    console.log (propiedad);
    console.log (persona[propiedad]);
}

// Bucles While
let i =0;
let max = 10;
while (i < max){
    console.log (i)
    i++;
}

// Bucles  Do While
/*i=10;
do{
    console.log ("estoy en el do while "+i)
}while (i<max)
*/

// Casos Break , Continue

let Lis = [1,6,3,8,4,6];
for (let i=0; i<lista.length; i++){
    if (lista[i]=== 3){
        continue;
    }

    console.log (lista[i]);

    if(lista[i]>5){
        break;
    }
}

// ambito de un bucle -- alcance que tiene declarada las variables 

//labels

let unidades =0;
let decenas =0;

bucleDecenas: while(true){
    bucleunidades: while(true){
        console.log(`numero actual es: ${decenas}${unidades}`);
        unidades++
        if(unidades === 10){
            unidades =0
            break bucleunidades
        }
    }
    decenas ++
    if(decenas === 2){
        break  bucleDecenas
    }
}