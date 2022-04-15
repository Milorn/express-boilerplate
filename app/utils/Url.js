module.exports = (str) => {
    const protocol = process.env.SERVER_SSL === true ? 'https' : 'http';
    return protocol + '://' + process.env.SERVER_HOST + ':' + process.env.SERVER_PORT + '/' + str;
};