const { Constellation } = require('../models');

const constellationData = [
    {
      constellation_name: "Orion"  
    },
];


const seedConstellation = () => Constellation.bulkCreate(constellationData);

module.exports = seedConstellation;