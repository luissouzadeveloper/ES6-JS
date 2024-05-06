// Classes

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    produtoComDesconto(desconto) {
        return this.preco * ((100 - desconto) / 100)
    }
}

const camisa = new Produto('Camisa gola V', 30);
console.log(camisa.nome)
console.log(camisa.produtoComDesconto(10))

const tenis = new Produto('Tenis Nike', 200)
console.log(tenis.nome);
console.log(tenis.produtoComDesconto(20))