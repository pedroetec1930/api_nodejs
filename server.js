import express from "express"

const app = express()
app.use(express.json())

let users = []

app.get("/users", async (req,res) => {
    res.status(200)     .json(users)
})

app.post("/users", async (req,res) => {
    users.push(req.body)
    res.status(201)     .send("Usuário criado!")
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})