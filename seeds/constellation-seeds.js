const { Constellation } = require('../models');

const constellationData = [
    {
      constellation_name: "Orion"  
    },
    {
        constellation_name: 'Scorpio'
    },
];


const seedConstellation = () => Constellation.bulkCreate(constellationData);

module.exports = seedConstellation;