const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("LOgin ")
})



module.exports = { route }