const express = require('express');
const router = express.Router();
const {getPics} = require('../controllers/picControllers');

router.route('/:folder').get(getPics);

module.exports = router;
