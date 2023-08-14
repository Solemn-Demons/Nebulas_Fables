const { Facts } = require('../models');

const factsData = [
    {
    fact_season: "Winter",
    },
    {
        fact_name: "Mythological Hunter in Greek Mythology",
    },
    {
        fact_visibility: "January to April (northern hemisphere)",
    },
];


const seedFacts = () => Facts.bulkCreate(factsData);

module.exports = seedFacts;