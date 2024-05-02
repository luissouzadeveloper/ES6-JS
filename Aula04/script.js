// Map

const produtos = [
    {nome: 'Camisa', preco: 50, categoria: 'Roupas'},
    {nome: 'Playstation 5', preco: 4500, categoria: 'Eletrônicos'},
    {nome: 'Pneu', preco: 300, categoria: 'Automotiva'},
    {nome: 'Armário', preco: 700, categoria: 'Móveis'}
]

produtos.map((prod) => {
    if (prod.categoria === 'Roupas') {
        prod.promocao = true
    }
});
console.log(produtos);