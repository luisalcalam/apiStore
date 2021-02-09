const express = require('express');
const router = express.Router();

//Controllers
const { getTypes, insertType, updateType } = require('../controllers/type_controller');

// Routes
router.get('/', getTypes);
router.post('/', insertType);
router.put('/', updateType);

module.exports = router;