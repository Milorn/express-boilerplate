//Load .env
var dotenv = require('dotenv');
dotenv.config();

//Register module aliases
var aliases = require('../bootstrapers/aliases');
aliases(require('path').resolve(__dirname, '..'));

var db = require('$bootstrapers/database');

const args = process.argv.splice(2);

const fresh = args.includes('fresh');
const seed = args.includes('seed');

const migrate = async () => {
    await loadModels(db);

    if(seed)
        await seedModels();

    db.close();
}


const loadModels = async (db) => {
    const models = require('$models');
    
    for(const model of models) 
        require('$models/' + model);
    
    for(const key in db.models) {
        if(db.models[key].hasOwnProperty('associate')) {
            db.models[key].associate(db.models);
        }
    }
    return db.sync({force: fresh});
};

const seedModels = async () => {
    const seeders = require('$seeders');
    for(const seeder of seeders) {
        const instance = require('$seeders/' + seeder);
        await instance.seed();
    }

};

migrate();