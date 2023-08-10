const { Star } = require('../models');

const starData = [
    
];


const seedStar = () => Starchart.bulkCreate(starData);

module.exports = seedStar;