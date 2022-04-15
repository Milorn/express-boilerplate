const User = require('$models/User');

const data = [
    {
        'email': 'kar1999@hotmail.fr',
        'password': 'hehe'
    },
    {
        'email': 'milornovivias@gmail.com',
        'password': 'benq2008'
    }
];


module.exports = {
    seed() {
        const Seeder = require('./Seeder');
        Seeder(User, data);
    }
};