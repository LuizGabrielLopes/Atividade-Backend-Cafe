const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");

router.get("/menu", pedidoController.getAllPedidos);
router.post("/order", pedidoController.addPedido);
router.get("/order/:id", pedidoController.getPedidosById);
router.delete("/order/:id", pedidoController.deletePedido);

module.exports = router;