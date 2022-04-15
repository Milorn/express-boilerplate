const models = require('$models/registerModels');

module.exports = async (db) => {
    
    for(const model of models) {
        let instance = require('$models/' + model);
    }

    for(const key in db.models) {
        if(db.models[key].hasOwnProperty('associate')) {
            db.models[key].associate(db.models);
        }
    }  

    const force = process.env.DB_FORCE === 'true' ? true : false;

    db.sync({force}).then(() => {
        if(force) {
            const seeders = require('./seeders');
            seeders();
        }
        else {
            console.log('Sync done');
        }
    });
};