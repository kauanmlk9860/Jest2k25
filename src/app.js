const express = require("express")
const app = express()
const rotas = require("./routes")

app.use(express.json())
app.use(rotas)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app
