const asyncHandler = require('express-async-handler');

// @desc Get all pictures from a folder
// @route GET api/pics/:folder
// @access Public
const getPics = asyncHandler(async (req, res) => {
    try {
        console.log('Request : ', req.params.folder);
        res.status(200).json({
            message: `get pics from ${req.params.folder} directory`,
        });
    } catch (error) {
        res.status(400).json({
            message: `Error: ${error}. Cannot get pictures!`,
        });
    }
});

module.exports = {getPics};
