const route = require('express').Router()
const { db, users } = require('../data/db')

route.post('/', (req, res) => {


    users.create(
        {
            name: req.body.name,
            username: req.body.email,
            pass: req.body.pass
        }
    ).then(() => {
        console.log("New user Created")
    }).catch(() => {
        console.error("unable to create new user")
    })

    res.redirect('../')

})






module.exports = { route }