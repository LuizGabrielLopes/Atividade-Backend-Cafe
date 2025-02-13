const { error } = require("console");

class ListaPedido {
    constructor() {
        this.pedidos = [];
    }

    addPedido(pedido) {
        this.pedidos.push(pedido);
    }

    getAllPedidos (){
        return this.pedidos;
    } 

    getPedidosById(id) {
        const pedido = this.pedidos.find(pedido => pedido.id == id);
        if (!pedido){
            throw new Error("Pedido não encontrado");
        }
        return pedido;

    }
    deletePedido(id) {
        this.pedidos = this.pedidos.filter(pedido => pedido.id != id);
    }

}

module.exports = ListaPedido;