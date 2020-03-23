const route = require('express').Router()
const { db, users } = require('../data/db')
const { random_gen } = require('../utils/token_gen')

route.post('/', async (req, res) => {

    console.log(req.body)
    await users.create(
        {
            name: req.body.name,
            username: req.body.email,
            pass: req.body.pass,
            token: random_gen(15),
        }
    ).then((u) => {
        res.send({ msg: `Welcome ${u.name} , please log in ` })
    }).catch((err) => {
        res.send({ error: "Uable to create user  " })
    })



})






module.exports = { route }