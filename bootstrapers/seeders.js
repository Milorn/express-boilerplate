const seeders = require('$seeders/registerSeeders');

module.exports = async () => {
    for(const seeder of seeders) {
        const instance = require('$seeders/' + seeder + 'Seeder');
        await instance.seed();
    }

    console.log('Seeding complete');
};