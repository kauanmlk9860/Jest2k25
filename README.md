<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=4B0082&height=120&section=header"/>

# API de Cadastro de Clientes (CRUD) com Prisma + MySQL

Projeto desenvolvido em **Node.js** + **Express**, usando **Prisma** como ORM e **MySQL** como banco de dados.
Testes realizados com **Jest** e endpoints testáveis via **Postman**.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* Prisma
* MySQL
* Jest
* Supertest
* Postman

---

## 🧩 Estrutura do Projeto

```
projeto-clientes-prisma/
│
├─ src/
│   ├─ app.js               # Configuração do servidor Express
│   └─ controllers/
│       └─ clienteController.js
│
├─ prisma/
│   ├─ schema.prisma        # Modelo do banco de dados
│   └─ seed.js              # Script para popular o banco
│
├─ tests/
│   └─ cliente.test.js      # Testes da API com Jest
│
├─ package.json
└─ README.md
```

---

## ⚡ Configuração do Banco de Dados

1. Crie um banco MySQL chamado `db_clientes` (ou outro de sua preferência).
2. Atualize o `.env`:

```
DATABASE_URL="mysql://root:senha@localhost:3306/db_clientes"
```

3. Execute as migrations do Prisma:

```bash
npx prisma migrate dev --name init
```

4. Popular o banco com clientes de exemplo (seed):

```bash
npx prisma db seed
```

O arquivo `prisma/seed.js` já contém 10 clientes para teste.

---

## 📌 Rodar o Servidor

```bash
npm install
npm run dev
```

Servidor rodando em:

```
http://localhost:3000
```

> ⚠️ Se não tiver o `nodemon` instalado, instale com:
>
> ```bash
> npm install --save-dev nodemon
> ```

---

## 🧪 Testes com Jest

```bash
npm test
```

O Jest executará testes para:

* Criar cliente (POST)
* Listar clientes (GET)
* Buscar cliente por ID (GET)
* Atualizar cliente (PUT)
* Deletar cliente (DELETE)

---

## 🌐 Endpoints da API

### Criar Cliente

```
POST /clientes
```

Body JSON:

```json
{
  "nome": "Ana Souza",
  "email": "ana.souza@email.com",
  "telefone": "11988887777"
}
```

### Listar Todos os Clientes

```
GET /clientes
```

### Buscar Cliente por ID

```
GET /clientes/:id
```

### Atualizar Cliente

```
PUT /clientes/:id
```

Body JSON:

```json
{
  "nome": "Cliente Atualizado",
  "email": "novo.email@email.com",
  "telefone": "11999998888"
}
```

### Deletar Cliente

```
DELETE /clientes/:id
```

---

## 📌 Testar no Postman

1. Abra o Postman.
2. Crie requisições **POST** ou **GET** usando os endpoints acima.
3. Para criar vários clientes, use **um cliente por requisição**. Exemplo de 10 clientes:

```json
[
  { "nome": "Ana Souza", "email": "ana.souza@email.com", "telefone": "11988887777" },
  { "nome": "Carlos Oliveira", "email": "carlos.oliveira@email.com", "telefone": "11977776666" },
  { "nome": "Fernanda Lima", "email": "fernanda.lima@email.com", "telefone": "11966665555" },
  { "nome": "Gabriel Santos", "email": "gabriel.santos@email.com", "telefone": "11955554444" },
  { "nome": "Juliana Pereira", "email": "juliana.pereira@email.com", "telefone": "11944443333" },
  { "nome": "Ricardo Mendes", "email": "ricardo.mendes@email.com", "telefone": "11933332222" },
  { "nome": "Patrícia Gomes", "email": "patricia.gomes@email.com", "telefone": "11922221111" },
  { "nome": "Felipe Costa", "email": "felipe.costa@email.com", "telefone": "11911112222" },
  { "nome": "Mariana Rocha", "email": "mariana.rocha@email.com", "telefone": "11910101010" },
  { "nome": "Bruno Almeida", "email": "bruno.almeida@email.com", "telefone": "11920202020" }
]
```

> ⚠️ A API retorna erro se algum campo estiver faltando:
>
> ```json
> { "erro": "Nome, email e telefone são obrigatórios" }
> ```

---

## 🔹 Dicas de Uso

* Cada requisição **POST** deve enviar **um cliente por vez**.
* Use a Collection do Postman para testar rapidamente todos os endpoints.
* Garanta que o MySQL esteja rodando e o Prisma conectado.
* Você pode criar testes automatizados com Jest usando **Supertest** para todas as rotas.

---

## ✅ Observações

* API pronta para testes de CRUD completo de clientes.
* Pronta para integração com front-end ou sistemas de teste automatizado.
* Seed com 10 clientes de exemplo já incluída.

  ## iNTEGRANTES
  * Richard Pimentel
  * Kauan Rodrigues

* API pronta para testes de CRUD completo de clientes.
* Pronta para integração com front-end ou sistemas de teste automatizado.
* Seed com 10 clientes de exemplo já incluída.

  
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=4B0082&height=120&section=footer"/>
