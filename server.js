const exp = require('express')
const app = exp()





app.use(exp.static('public'))

app.post('/login', (req, res) => {
    console.log("login")
    res.send("logind")
}
)

app.listen(5555, () => {
    console.log("server Started")
})