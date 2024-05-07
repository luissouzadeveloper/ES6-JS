// Herança

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    produtoComDesconto(desconto) {
        return this.preco * ((100 - desconto) / 100)
    }
}

class ProdutoComAtributos extends Produto {
    constructor(nome, preco, cores) {
        super(nome, preco)
        this.cores = cores
    }

    mostarCores() {
        console.log('As cores são: ')
        this.cores.forEach(cor => {
            console.log(cor)
        });
    }
}

const bone = new ProdutoComAtributos('Boné', 29.50, ['Preto', 'Vermelho', 'Verde'])

console.log(bone.nome)
console.log(bone.produtoComDesconto(10))
bone.mostarCores()