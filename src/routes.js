const express = require("express")
const router = express.Router()
const controller = require("./controllers/clienteController")

router.get("/clientes", controller.listarClientes)
router.get("/clientes/:id", controller.buscarCliente)
router.post("/clientes", controller.criarCliente)
router.put("/clientes/:id", controller.atualizarCliente)
router.delete("/clientes/:id", controller.removerCliente)

module.exports = router
