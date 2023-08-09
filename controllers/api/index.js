const router = require('express').Router();
const userRoutes = require('./userRoutes');
const mythosRoutes = require('./mythos-routes');
const starchartRoutes = require ('./starchart-routes');

router.use('./user', userRoutes);
router.use('/mythos', mythosRoutes);
router.use('/starchart', starchartRoutes);

module.exports = router;