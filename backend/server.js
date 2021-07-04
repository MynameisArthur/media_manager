const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const picRoutes = require('./routes/picRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

//initialize dotenv
dotenv.config();
//initialize app
const app = express();
app.use(express.json());

app.use('/api/pics', picRoutes);

// static folders
app.use('/music', express.static('music'));
app.use('/pic', express.static('pic'));
app.use('/vid', express.static('vid'));

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
