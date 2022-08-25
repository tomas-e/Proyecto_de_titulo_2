const { Sequelize, Model, DataTypes } = require("sequelize");
const dotenv = require('dotenv');

dotenv.config({path: './conf.env'});

const connect = () => {

    const hostName = process.env.HOST;
    const userName = 'postgres';
    const password = '123';
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect:  'postgres',
       
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.tasks = require("../models/mascota.model")(sequelize, DataTypes, Model);
    db.tasksUsuario = require("../models/usuario.model")(sequelize, DataTypes, Model);
    return db;

}

module.exports = {
    connect
}