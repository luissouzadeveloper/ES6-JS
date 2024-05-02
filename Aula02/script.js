// Arrow functions
const soma = function soma(a, b) {
    return a + b
}
console.log(soma(2,3));

const arrowSoma = (c, d) => c + d

console.log(arrowSoma(2,3));

const greeting = (nome) => {
    return `Olá ${nome}, seja bem vindo!`
}
console.log(greeting('Luis'))

const testeArrow = () => console.log('Testado!');
testeArrow();

const user = {
    nome: 'Zé',
    dizerNome(){
        setTimeout(() => {
            console.log(this);
            console.log(`Nome de usuário ${this.nome}`);
        }, 500)
    }
}

user.dizerNome();