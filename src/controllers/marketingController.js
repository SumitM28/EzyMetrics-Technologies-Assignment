const Campaign = require('../models/Campaign');

// Simulating Marketing data fetching and storing in DB
exports.fetchCampaigns = async (req, res) => {
    // Dummy Campaign data
    const campaigns = [
        { name: 'Winter Sale', budget: 5000, leads_generated: 50 },
        { name: 'Spring Campaign', budget: 8000, leads_generated: 100 },
    ];

    // Save data to MongoDB
    await Campaign.insertMany(campaigns);
    res.status(200).json({ message: 'Campaigns fetched and saved', campaigns });
};
