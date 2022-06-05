//Load .env
var dotenv = require('dotenv');
dotenv.config();

//Register module aliases
var aliases = require('./aliases');
aliases(require('path').resolve(__dirname, '..'));

//Init database connection
var db = require('./database');

//Load models
var loadModels = require('./loadModels');
loadModels(db);

//Initialize app
var app = require('./app');

//App routes
var routesHandler = require('./routesHandler');
routesHandler(app);

module.exports = app;
