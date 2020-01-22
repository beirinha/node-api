const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-3wvmv.gcp.mongodb.net/<NomeBD>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);