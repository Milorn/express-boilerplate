
const Router = (router) => {
    for(const stack of router.stack) {
        const route = stack.route.stack;
        route[route.length - 1].handle = func(route[route.length - 1].handle);
    }

    return router;
}

const Func = (method) => async (req, res, next) => {
    try {
        await method(req, res);
    }
    catch(e) {
        next(e);
    }
};

module.exports = {
    Router,
    Func
};