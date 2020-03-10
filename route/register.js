const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("todo register user")
    // res.redirect()
})






module.exports = { route }