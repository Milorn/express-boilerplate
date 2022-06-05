const models = require('$models/registerModels');

module.exports = async (db) => {
    
    for(const model of models)
        require('$models/' + model);
    

    for(const key in db.models) {
        if(db.models[key].hasOwnProperty('associate')) {
            db.models[key].associate(db.models);
        }
    }  
};