const express = require('express');
const router = express.Router();

const { getColors, insertColor, updateColor } = require('../controllers/color_controller');

router.get('/', getColors);
router.post('/', insertColor);
router.put('/', updateColor);

module.exports = router;