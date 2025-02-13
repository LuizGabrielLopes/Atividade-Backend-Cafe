const { v4: uuid4 } = require("uuid");

class Pedido {
    constructor(produto, preco, status = "pendente") {
        this.id = uuid4();
        this.produto = produto;
        this.preco = preco;
        this.status = status;
    }
}

module.exports = Pedido;