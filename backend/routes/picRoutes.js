const express = require('express');
const router = express.Router();
const {
    getPics,
    updatePicsNames,
    downloadPicSet,
} = require('../controllers/picControllers');

router.route('/:folder').get(getPics);
router.route('/:folder/change').put(updatePicsNames);
router.route('/:folder/downloadSet/:url').put(downloadPicSet);

module.exports = router;
