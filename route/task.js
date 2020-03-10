const route = require('express').Router()
const { users, tasks } = require('../data/db')

route.get('/', (req, res) => {

    tasks.findAll({
        where: {
            userId: 1
        }
    }).then((task) => {
        res.send(task)
    }).catch(() => {
        console.error("unable to fetch data form database")
    })


})


route.get('/add', (req, res) => {

    tasks.create({
        text: "sdfhsdfshdfhdsf sdfdsfsdfkldskjf d",
        checked: true,
        userId: 2
    })
    res.redirect('/task')
})



module.exports = { route }
