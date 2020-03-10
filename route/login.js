const route = require('express').Router()
const { users } = require('../data/db')

route.post('/', (req, res) => {

    users.findOne({
        where:
        {
            username: req.body.user
        }
    })
        .then((user) => {
            if (user.pass == req.body.pass) {
                res.redirect('../list.html')
            }
            else {
                console.error("wrong Password")
                res.redirect('../')
            }


        })
        .catch(() => {
            console.error("username not found ")
            res.redirect('../')
        })







})



module.exports = { route }