const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function listarClientes(req, res) {
  const clientes = await prisma.cliente.findMany()
  res.json(clientes)
}

async function buscarCliente(req, res) {
  const id = parseInt(req.params.id)
  const cliente = await prisma.cliente.findUnique({ where: { id } })

  if (!cliente) {
    return res.status(404).json({ erro: "Cliente não encontrado" })
  }

  res.json(cliente)
}

async function criarCliente(req, res) {
  const { nome, email, telefone } = req.body

  if (!nome || !email || !telefone) {
    return res.status(400).json({ erro: "Nome, email e telefone são obrigatórios" })
  }

  try {
    const novo = await prisma.cliente.create({
      data: { nome, email, telefone }
    })
    res.status(201).json(novo)
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar cliente (email pode já estar cadastrado)" })
  }
}

async function atualizarCliente(req, res) {
  const id = parseInt(req.params.id)

  try {
    const atualizado = await prisma.cliente.update({
      where: { id },
      data: req.body
    })
    res.json(atualizado)
  } catch {
    res.status(404).json({ erro: "Cliente não encontrado" })
  }
}

async function removerCliente(req, res) {
  const id = parseInt(req.params.id)

  try {
    await prisma.cliente.delete({ where: { id } })
    res.status(204).send()
  } catch {
    res.status(404).json({ erro: "Cliente não encontrado" })
  }
}

module.exports = {
  listarClientes,
  buscarCliente,
  criarCliente,
  atualizarCliente,
  removerCliente
}
