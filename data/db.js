const seq = require('sequelize')

const db = new seq({
    dialect: 'sqlite',
    storage: __dirname + '/data.db',
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