const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("done")
})



module.exports = { route }
