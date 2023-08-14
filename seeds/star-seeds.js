const { Star } = require('../models');

const starData = [
    {
        star_name: "Rigel"
    },
    {
        star_name: "Betelgeuse"
    },
    {
        star_name: "Bellatrix"
    },
    {
        star_name: "Saiph"
    },
    {
        star_name: "Meissa A"
    },
    {
        star_name: "Belt"
    },
];


const seedStar = () => Starchart.bulkCreate(starData);

module.exports = seedStar;