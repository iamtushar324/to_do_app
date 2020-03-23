const route = require('express').Router()
const { users } = require('../data/db')

route.post('/', (req, res) => {
    console.log(req.body)
    users.findOne({
        where:
        {
            username: req.body.user
        }
    })
        .then((user) => {
            if (user.pass == req.body.pass) {
                res.send({ token: user.token })
            }
            else {
                res.send({ error: "incorrect username or password" })
            }


        })
        .catch(() => {
            res.send({ error: "incoarrect username or password" })

        })







})



module.exports = { route }