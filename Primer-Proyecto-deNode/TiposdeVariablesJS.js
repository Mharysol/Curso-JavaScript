
var variable;
//let variableLet;

// const constante;
const constante = "Hola soy una constante"

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante)

let b = 3;
console.log(b);

b= 5;
console.log(b);

/*diferencia entre var y let
var -> afecta a todo el codigo donde se este declarando 
let -> solo afecta al bloque donde se este declarando 
*/

var variable = "Hola soy una variable VAR"
for (var i = 0; i<3; i++){
    var variable = "Soy la segunda variable VAR"

}
console.log(variable);

let variableLet = "Hola soy una variable LET"
for (var i = 0; i<3; i++){
    let variableLet = "Soy la segunda variable LET"

}
console.log(variableLet);


////////////////////
var num = 4;
console.log(typeof num);