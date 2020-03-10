const seq = require('sequelize')

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



module.exports = { db, users }