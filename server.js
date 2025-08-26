import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get("/users", async (req,res) => {
    let users = await prisma.user.findMany()
    res.status(200)     .json(users)
})

app.post("/users", async (req,res) => {
    await prisma.user.create({
        data : {
            name : req.body.name,
            age : Number(req.body.age),
            email: req.body.email
        }
    })
    res.status(201)     .send("Usuário criado!")
})

app.put("/users/:id", async (req,res) => {
    await prisma.user.update({
        where : {
            id : req.params.id
        },
        data: {
            name : req.body.name,
            age : Number(req.body.age),
            email: req.body.email
        }
    })
    res.status(200)     .send("Usuário editado!")
})

app.delete("/users/:id", async (req,res) => {
    await prisma.user.delete({
        where : {
            id : req.params.id
        }
    })
    res.status(200)     .send("Usuário deletado!")
})

app.listen(3000, () => {
    console.log("Servidor rodando!")
})