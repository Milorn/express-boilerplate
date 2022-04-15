const Response = require('../utils/Response');
const FileValidationError = require('./FileValidationError');
const { MulterError } = require('multer');

module.exports = (err, req, res, next) => {
    console.log(err);

    if (err instanceof FileValidationError) {
        const errors = {
            name: err.extraErrorsData.field,
            message: err.toString()
        };
        return Response(res, { errors }, 422);
    }

    if (err instanceof MulterError) {
        const errors = {
            message: err.toString(),
            errors: err.code,
            additionalData: process.env.DEBUG === "true" ? err : undefined,
        };
        return Response(res, { errors }, 422);
    }


    const errors = {
        errors: process.env.DEBUG === "true" ? err.toString() : "Internal server error",
        stackTrace: process.env.DEBUG === "true" ? err.stackTrace : undefined,
    };


    Response(res, errors, 500);
};