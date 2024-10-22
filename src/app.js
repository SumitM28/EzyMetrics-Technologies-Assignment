const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', routes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

module.exports = app;

