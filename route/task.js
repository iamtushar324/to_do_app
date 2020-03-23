const route = require('express').Router()
const { users, tasks } = require('../data/db')

route.get('/', async (req, res) => {


    let user = await auth(req, res)

    if (user.name) {

        tasks.findAll({
            where: {
                userId: user.id
            }
        }).then((task) => {
            res.send(task)
        }).catch(() => {
            res.send({ error: "unable to fetch tasks " })
        })


    }


    else if (user.error) {
        res.redirect("../")
    }




})


route.post('/', async (req, res) => {

    let user = await auth(req, res)



    let task = await tasks.create({
        text: req.body.task,
        checked: false,
        userId: user.id
    }).then((task) => {
        res.send(task)
    }).catch((err) => {
        res.send({ error: err })
    })


})

route.delete('/del/:id', async (req, res) => {

    let user = await auth(req, res)

    console.log(req.params.id)

    let task = await tasks.destroy({
        where: {
            userId: user.id,
            task_id: req.params.id
        }
    }).catch((err) => {
        res.send({ error: err })
    }).then(() => { res.send({ msg: "deleted" }) })





})


route.delete('/checked', async (req, res) => {

    let user = await auth(req, res)



    let delete_task = await tasks.destroy({
        where: {

            userId: user.id,
            checked: true

        }
    }).then(() => {
        res.send("all deleted")
    }).catch((err) => {

        res.send({ error: err + " jj" })
    })





})

route.put('/checked', async (req, res) => {

    let user = await auth(req, res)

    let task = await tasks.findOne({
        where: {
            userId: user.id,
            task_id: req.body.id
        }
    }).catch(() => {
        res.send(() => res.send({ error: "unable to check" }))
    })

    task.checked = req.body.checked

    await task.save()

    res.send('done')


})




async function auth(req, res) {

    let cu_token = req.header('Cookie')
    cu_token = cu_token.split('=')[1]

    let user;

    let current_user = await users.findOne({
        where: {
            token: cu_token
        }
    }).then((u) => {
        user = u

    }).catch(() => {
        res.redirect('/')
    })

    return user






}

route.get('/user', async (req, res) => {

    let user = await auth(req, res)

    res.send(user)
})


module.exports = { route }
