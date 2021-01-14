const Sequelize = require('sequelize');

module.exports = new Sequelize('dnd_', 'mysql', 'ilbid64=', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
});