const router = require('express').Router();
const { Starchart } = require('../../models');

router.get('/', (req, res) => {
    Starchart.findAll()
    .then((starchart) => res.json(starchart))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    Starchart.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((starchart) => { 
        console.log(starchart);
        res.status(200).json(starchart);
})
.catch((err) => {
    console.log(err);
    res.status(400).json(err);
    });
});