const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    source: String,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
