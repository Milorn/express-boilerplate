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
    async seed(){
        const Seeder = require('./Seeder');
        return Seeder(User, data);
    }
};