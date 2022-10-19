//Factorial  con FOR


let num = 10
let fac = 1
for (let i =num; i > 0; i-- ){
    fac *=i; 
   
}
console.log (`numero factorial de ${num}! = ${fac}`)

// Bucles While

let nume =10;
let fact = 1;
let numePrint = nume
while (nume != 0){
    fact= fact*nume;
    nume --

}
console.log (`numero factorial de ${numePrint}! = ${fact}`)


// Bucles While con IF 


let numer = 10;
let facto = 1;
let n = 1
while (n <= numer){
    facto *= n+1
    n ++
    if (n == numer) break

}
console.log (`numero factorial de ${numer}! = ${facto}`)
