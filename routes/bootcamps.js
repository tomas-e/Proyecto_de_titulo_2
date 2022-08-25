const express = require('express');
const router = express('router');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/', (req, res) => {
    res.status(200).json({success: true, msg:'show all'});
})

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Show id param ${req.params.id}`});
})
router.post('/', (req, res) => {
    console.log(req.body.arbol);
    res.status(200).json({success: true, msg: `Show id param ${req.params.id}`});
})
module.exports = router;