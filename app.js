const express = require('express');
const app = express();
const arkademy = require('./API/routes/arkademy');
const bp = require('body-parser');
const mongoose = require('mongoose');

app.use(bp.json());
mongoose.connect('mongodb://localhost/arkademy', { useNewUrlParser: true, useUnifiedTopology: true });

//router use
app.use('/arkademy', arkademy);

//error message edit
app.use((req, res, next) => {
    const error = new Error('not found');
    res.status(404).json({
        error: error.message
    });
})

module.exports = app;

