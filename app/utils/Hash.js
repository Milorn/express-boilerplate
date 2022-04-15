const bcrypt = require('bcrypt');

const salt = 10;

const Hash = (text) =>  {
    return bcrypt.hash(text, salt);
};

const Compare = (text, hash) => {
    return bcrypt.compare(text, hash);
};

module.exports = {
    Hash,
    Compare
}