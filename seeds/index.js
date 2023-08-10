const seedMythos = require('./mythos-seeds');
const seedStarchart = require('./starchart-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedMythos();
    console.log('\n----- MYTHOS SEEDED -----\n');
  
    await seedStarchart();
    console.log('\n----- STARCHART SEEDED -----\n');
  
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    process.exit(0);
};

seedAll();