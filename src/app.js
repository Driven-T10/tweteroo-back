import express from "express"
import cors from "cors"

const app = express()

// Configs
app.use(cors())
app.use(express.json())

const tweets = []
const users = []

// Funções (endpoints)
app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body
    users.push({ username, avatar })
    console.log(users)
    res.send("OK")
})



const PORT = 5000
app.listen(PORT, () => console.log(`Rodando servidor na porta ${PORT}`))