// Let e Const

// var = a variável é facilmente sobrescrista.
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x);

// let = a variável não é sobrescrista.

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a);
}

console.log(a);

let i = 1000

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log(i)

// const = após declarar um valor em const, não poderá ser alterada.

function logName() {
    const nome = 'Luis';
    console.log(nome);
}

const nome = 'João';

logName();
console.log(nome)

nome = 'Ana'