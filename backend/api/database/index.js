const { Sequelize } = require('sequelize');

var sequelize = new Sequelize('loginproj', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});
module.exports = sequelize