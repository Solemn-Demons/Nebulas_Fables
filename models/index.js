// star chart 
// mythos
// 

const User = require('./User');
const Mythos = require('./Mythos');
const Star = require('./Star');
const Constellation = require('./Constellation');
const Facts = require('./Facts');


Constellation.hasMany(Star, {
    foreignKey: 'constellation_id',
});

Star.belongsTo(Constellation, {
    foreignKey: 'constellation_id',
});

Constellation.hasMany(Facts, {
    foreignKey: 'constellation_id',
});

Facts.belongsTo(Constellation, {
    foreignKey: 'constellation_id',
});

module.exports = {
    User,
    Mythos,
    Star,
    Constellation,
    Facts,
};