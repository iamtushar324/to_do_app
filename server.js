const exp = require('express')
const app = exp()
const routes = require('./route').route
const { db, users } = require('./data/db')


app.use(exp.static('public'))
app.use(exp.urlencoded())
app.use(exp.json())

app.use('/', routes)







// server starts only when the database is connected

db.sync().then(() => {

    app.listen(5555, () => {
        console.log("server Started")
    })
}).catch(() => {
    console.error("unable to connect to database")
})
