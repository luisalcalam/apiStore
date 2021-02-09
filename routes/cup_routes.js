const express = require('express');
const router = express.Router();

//Controllers
const { getCups, updateNumberCup, createCup } = require('../controllers/cup_controller')

// Routes
router.get('/', getCups);
router.post('/', createCup);
router.put('/updateNumbers', updateNumberCup);

module.exports = router;