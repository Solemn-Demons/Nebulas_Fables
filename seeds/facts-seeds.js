const { Facts } = require('../models');

const factsData = [
    
];


const seedFacts = () => Facts.bulkCreate(factsData);

module.exports = seedFacts;