
module.exports = (res, response, status = 200) => {

    let dataFormat = undefined;
    if (response.data)
        dataFormat = response.data instanceof Array ? 'array' : typeof (response.data);

    let errorsFormat = undefined;
    if (response.errors)
        errorsFormat = response.errors instanceof Array ? 'array' : typeof (response.errors);


    const data = {
        message: response.message,

        data: response.data,
        dataFormat: dataFormat,

        errors: response.errors,
        errorsFormat: errorsFormat,

        pagination: response.pagination,

        additionalData: response.additionalData
    };

    res.status(status).json(data);
};
