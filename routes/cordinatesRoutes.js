const express = require('express');
const router = express.Router();
const { getCordinates } = require('../controllers/cordinatesController');

router.get('/cordinates', getCordinates);


module.exports = router;