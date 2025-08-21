const request = require("supertest")
const app = require("../src/app")

describe("API de Clientes com Prisma", () => {
  let clienteId

  it("Deve criar um novo cliente", async () => {
    const res = await request(app).post("/clientes").send({
      nome: "João da Silva",
      email: "joao@email.com",
      telefone: "11999999999"
    })

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("id")
    clienteId = res.body.id
  })

  it("Deve listar todos os clientes", async () => {
    const res = await request(app).get("/clientes")
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBeTruthy()
  })

  it("Deve buscar cliente por ID", async () => {
    const res = await request(app).get(`/clientes/${clienteId}`)
    expect(res.statusCode).toBe(200)
    expect(res.body.nome).toBe("João da Silva")
  })

  it("Deve atualizar cliente existente", async () => {
    const res = await request(app).put(`/clientes/${clienteId}`).send({
      nome: "João Atualizado"
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.nome).toBe("João Atualizado")
  })

  it("Deve deletar cliente existente", async () => {
    const res = await request(app).delete(`/clientes/${clienteId}`)
    expect(res.statusCode).toBe(204)
  })

  it("Deve retornar erro ao buscar cliente inexistente", async () => {
    const res = await request(app).get("/clientes/99999")
    expect(res.statusCode).toBe(404)
  })
})
