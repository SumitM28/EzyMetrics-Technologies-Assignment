const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: String,
    budget: Number,
    leads_generated: Number,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema);

