// Filter

const array = [1, 2, 3, 4, 5];

const maiorQueTres = array.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(maiorQueTres);

const usuarios = [
    {nome: 'João', disponivel: true},
    {nome: 'Zé', disponivel: false},
    {nome: 'Maria', disponivel: false},
    {nome: 'Ana', disponivel: true},
]

const usuariosLivres = usuarios.filter((usuarios) => usuarios.disponivel);
const usuariosNaoLivres = usuarios.filter((usuarios) => !usuarios.disponivel);

console.log(usuariosLivres)
console.log(usuariosNaoLivres)