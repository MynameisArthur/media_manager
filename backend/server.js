const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

//initialize dotenv
dotenv.config();
//initialize app
const app = express();

app.use('/music', express.static('music'));
app.use('/pic', express.static('pic'));
app.use('/vid', express.static('vid'));

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
