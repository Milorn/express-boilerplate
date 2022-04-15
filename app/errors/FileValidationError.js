class FileValidationError extends Error {

    constructor(extraErrorsData) {
        super(`File format < ${extraErrorsData.mimetype} > ' is not supported.`);
        this.extraErrorsData = extraErrorsData;
    }
}

module.exports = FileValidationError;