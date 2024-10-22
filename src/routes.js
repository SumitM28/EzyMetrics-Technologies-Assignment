const express = require('express');
const { fetchLeads } = require('./controllers/crmController');
const { fetchCampaigns } = require('./controllers/marketingController');
const { generatePDFReport, generateCSVReport } = require('./controllers/reportController');

const router = express.Router();

router.get('/crm/leads', fetchLeads);
router.get('/marketing/campaigns', fetchCampaigns);
router.get('/reports/pdf', generatePDFReport);
router.get('/reports/csv', generateCSVReport);

module.exports = router;
