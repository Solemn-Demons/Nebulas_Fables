const { User } = require('../models');

const userData = [
    {
        user: 'boopyhij',
        email: 'mphillips2017@gmail',
        password: '12bnk34j'
    }
];


const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;