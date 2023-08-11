const router = require('express').Router();
const { Constellation } = require('../../models');

router.get('/', (req, res) => {
    Constellation.findAll()
    .then((constellation) => res.json(constellation))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Constellation.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((constellation) => { 
        console.log(constellation);
        res.status(200).json(constellation);
})
.catch((err) => {
    console.log(err);
    res.status(400).json(err);
    });
});

//router.post()

//router.delete()

module.exports = router;