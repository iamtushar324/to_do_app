const route = require('express').Router()

const taskroute = require('./task').route



route.use('/task', taskroute)
route.use('/register', require('./register').route)
route.use('/login', require('./login').route)

module.exports = { route }




