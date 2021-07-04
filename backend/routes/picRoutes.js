const express = require('express');
const router = express.Router();
const {getPics, updatePicsNames} = require('../controllers/picControllers');

router.route('/:folder').get(getPics);
router.route('/:folder/change').get(updatePicsNames);

module.exports = router;
