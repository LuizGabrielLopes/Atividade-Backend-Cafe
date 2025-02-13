const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");

router.get("/menu", pedidoController.getAllPedidos);
router.get("/order", pedidoController.addPedidos);
router.get("/order/:id", pedidoController.getPedidosById);
router.get("/order/:id", pedidoController.deletePedido);

module.exports = router;