const exp = require('express')
const app = exp()





app.use(exp.static('public'))
app.use(exp.urlencoded())
app.use(exp.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send("logind")
}
)

app.listen(5555, () => {
    console.log("server Started")
})