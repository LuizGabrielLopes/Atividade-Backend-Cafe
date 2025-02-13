const Pedido = require("../models/Pedido");
const ListaPedido = require("../models/ListaPedidos");

const lista = new ListaPedido();

lista.addPedido(new Pedido('Cappuccino', 10.99, 'Pendente'));
lista.addPedido(new Pedido('Café Espresso', 7.99, 'Em andamento'));
lista.addPedido(new Pedido('Café Extraforte', 12.99, 'Em andamento'));
lista.addPedido(new Pedido('Café com Leite', 15.99, 'Pronto'));

const router = {
    addPedido: (req, res) => {
        try {
            const { produto, preco, status} = req.body;
            if(!produto || !preco || !status) {
                throw new Error('Preencha todos os campos!');             }
            const order = new Pedido (produto, preco, status);
            lista.addPedido(order);
            res.status(200).json({message: 'Pedido feito com sucesso'});
        } catch (error) {
            res.status(400).json({message: "Erro ao adicionar pedido", error});
        }
    },

    getAllPedidos:(req,res) => {
        try {
            const menu = lista.getAllPedidos();
            res.status(200).json(menu);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar menu', error});
        }
    },

    getPedidosById: (req,res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getPedidosById(id));
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar pedido por id', error});
        }
    },

    deletePedido: (req, res) => {
        try {
            const { id } = req.params;
            const pedido = lista.getPedidosById(id);
            if (!pedido) {
                return res.status(404).json({ message: "Pedido não encontrado" });
            }
            if (pedido.status !== "Pendente" && pedido.status !== "Pronto") {
                return res.status(403).json({ message: "Não é possível deletar um pedido que já está em preparo ou pronto" });
            }
            lista.deletePedido(id);
            return res.status(200).json({ message: "Pedido cancelado com sucesso" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao cancelar pedido", error });
        }
    }
}

module.exports = router;
