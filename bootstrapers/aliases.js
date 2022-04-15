const path = require('path');
const moduleAlias = require('module-alias');
const aliases = require('../config/aliases');

module.exports = (dir) => {

    //Prefix the paths with the root directory absolute path
    for(const key of Object.keys(aliases)) 
        aliases[key] = path.join(dir, aliases[key]);
    
    moduleAlias.addAliases(aliases); //Register the routes
    moduleAlias();
};
