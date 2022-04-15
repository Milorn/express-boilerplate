const { Model } = require('sequelize');
const db = require('$bootstrapers/database');
const schema = require('$migrations/Users');


class User extends Model {};

const options = {
    modelName: "User",
    tableName: "users"
};

User.init(schema, { sequelize: db, ...options });


module.exports = User;