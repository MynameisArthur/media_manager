const asyncHandler = require('express-async-handler');
const path = require('path');
const fs = require('fs');

// @desc Get all pictures from a folder
// @route GET api/pics/:folder
// @access Public
const getPics = asyncHandler(async (req, res) => {
    const filePath = path.join(__dirname, `../../pic/${req.params.folder}`);
    if (filePath) {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                return res
                    .status(400)
                    .json({msg: `Cannot get pictures! ${err}`});
            }
            res.status(200).json({
                message: `Get pics from ${req.params.folder} directory`,
                pics: files,
            });
        });
    } else {
        res.status(400);
        throw new Error(`Error: Cannot get pictures!`);
    }
});
// @desc Change names of all pics in a given folder
// @route PUT api/pics/:folder
// @access Private
const updatePicsNames = asyncHandler(async (req, res) => {
    const directory = req.params.folder;

    const filePath = path.join(__dirname, `../../pic/${directory}`);
    if (filePath) {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                return res
                    .status(400)
                    .json({msg: `Cannot get pictures! ${err}`});
            }
            const newNames = files.map((file, index) => {
                const extension = file.match(/.(jpe?g|gif|png)/);
                return (file = `${directory}_0${index + 1}${extension[0]}`);
            });
            files.forEach((file, index) => {
                const extension = file.match(/.(jpe?g|gif|png)/);
                fs.rename(
                    `${filePath}/${file}`,
                    `${filePath}/${directory}_0${index + 1}${extension[0]}`,
                    (err) => {
                        if (err) {
                            console.log(err);
                        }
                    }
                );
            });
            res.status(200).json({
                message: `Changed pics names `,
                pics: newNames,
            });
        });
    } else {
        res.status(400);
        throw new Error(`Error: Cannot get pictures!`);
    }
});

// @desc Download pic set
// @route POST api/pics/:folder/downloadSet/:url
// @access Private

const downloadPicSet = asyncHandler(async (req, res) => {
    const picsUrl = req.params.url;
    res.status(201).json({
        url: picsUrl,
        message: 'Pictures downloaded',
    });
});

module.exports = {getPics, updatePicsNames, downloadPicSet};
