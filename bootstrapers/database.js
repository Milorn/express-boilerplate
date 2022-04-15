const Sequelize = require('sequelize');
const config = require('$config/database');

const sequelize = new Sequelize(config.db, config.username, config.password, config.options);

module.exports = sequelize;