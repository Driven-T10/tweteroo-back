import express from "express"
import cors from "cors"

const app = express()

// Configs
app.use(cors())
app.use(express.json())

const tweets = []   // { username: "bobesponja", tweet: "Oi tudo bom?" }
const users = []    // { username: "bobesponja", avatar: "www.imagem.com" }

// Funções (endpoints)
app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body

    users.push({ username, avatar })
    console.log(users)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    // find => retornar undefined se não achar OU o objeto do usuário se achar
    const userExists = users.find((user) => user.username === username)

    if (!userExists) return res.send("UNAUTHORIZED")

    tweets.push({ username, tweet })
    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const completeTweets = tweets.map((tweet) => {
        const user = users.find((u) => u.username === tweet.username)
        return { ...tweet, avatar: user.avatar }
    })

    res.send(completeTweets.slice(-10))
})

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando servidor na porta ${PORT}`))