const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.json({message: 'API'});
});

module.exports = Router;