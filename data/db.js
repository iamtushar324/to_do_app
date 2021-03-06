const seq = require('sequelize')
const { random_gen } = require('../utils/token_gen')

const db = new seq({
    dialect: 'mysql',

    username: 'todouser',
    password: 'classmatetodo',
    database: 'todoapp'
})

const users = db.define('users', {
    id: {
        type: seq.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },

    token: {
        type: seq.STRING(30),
        allowNull: false,
        unique: true,
    },

    name: {
        type: seq.STRING(50),
        allowNull: false

    },
    username: {
        type: seq.STRING(50),
        unique: true,
        allowNull: false


    },

    pass: {
        type: seq.STRING(20),
        allowNull: false



    }



}

);

const tasks = db.define('tasks', {

    task_id: {
        type: seq.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },



    text: {
        type: seq.STRING(50),
        allowNull: true,

    },

    checked: {
        type: seq.BOOLEAN,
        allowNull: false
    }





})

tasks.belongsTo(users)


module.exports = { db, users, tasks }