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


route.post('/add', (req, res) => {

    let ch;
    if (req.body.check) {
        ch = true
    }
    else {
        ch = false
    }

    tasks.create({
        text: req.body.task,
        checked: ch,
        userId: 1
    })

    res.redirect('/list.html')
})

route.get('/delete', (req, res) => {
    tasks.destroy({
        where: {
            checked: true
        }
    }).then(() => {
        console.log("checked rows deleted")

    }).catch(() => {
        console.error("checked rows not  deleted")
    })

    res.redirect('/list.html')

})



module.exports = { route }
