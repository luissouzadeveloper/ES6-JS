// Destructuring
const frutas = ['Maçã', 'Laranja', 'Mamão'];
const [fr1, fr2, fr3] = frutas;
console.log(fr1);

const produtosDetalhes = {
    nome: 'Mouse',
    preco: 20,
    categoria: 'Periféricos',
    cor: 'Preto'
}

const {nome: nomeProduto, preco, categoria} = produtosDetalhes;
console.log(`Produto: ${nomeProduto}, Preço: ${preco}, Categoria: ${categoria}`)