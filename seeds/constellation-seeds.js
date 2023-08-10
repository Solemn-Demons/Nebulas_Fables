const { Constellation } = require('../models');

const constellationData = [
    
];


const seedConstellation = () => Constellation.bulkCreate(constellationData);

module.exports = seedConstellation;