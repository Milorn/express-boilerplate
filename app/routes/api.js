const Router = require('express').Router();

const NotFoundMiddleware = require('$middlewares/NotFound');

Router.get('/', (req, res) => {
    res.json({message: 'API'});
});

module.exports = Router;