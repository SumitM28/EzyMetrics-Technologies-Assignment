const Lead = require('../models/Lead');

// Simulating CRM data fetching and storing in DB
exports.fetchLeads = async (req, res) => {
    // Dummy CRM data
    const leads = [
        { name: 'John Doe', email: 'john@example.com', source: 'Facebook' },
        { name: 'Jane Smith', email: 'jane@example.com', source: 'Google' },
    ];

    // Save data to MongoDB
    await Lead.insertMany(leads);
    res.status(200).json({ message: 'Leads fetched and saved', leads });
};
