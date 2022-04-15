const apiRoutes = require('$routes/api');
const NotFoundHandler = require('$middlewares/NotFound');
const ErrorsHandler = require('$errors/Handler');

const routesHandler = (app) => {
    app.use('/api', apiRoutes);
    app.use('/', NotFoundHandler);
    app.use('/', ErrorsHandler);
};

module.exports = routesHandler;