const cron = require('node-cron');
const Lead = require('./src/models/Lead');
const { sendAlertEmail } = require('./src/services/emailService');
const app = require("./src/app")

// Check for lead threshold and send email alert
cron.schedule('0 0 * * *', async () => {
    const leadCount = await Lead.countDocuments();
    if (leadCount < 10) {
        await sendAlertEmail('Low Lead Count', 'Lead count has fallen below the threshold!');
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});