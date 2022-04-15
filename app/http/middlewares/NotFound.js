const Response = require('$utils/Response');

module.exports = (req, res) => {
    return Response(res, {message: "This url does not exist."}, 404);
}