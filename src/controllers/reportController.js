const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const PDFDocument = require('pdfkit');
const { parse } = require('json2csv');

// Generate PDF report
exports.generatePDFReport = async (req, res) => {
    const leads = await Lead.find();
    const campaigns = await Campaign.find();

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);

    doc.text('Leads Report', { align: 'center' });
    leads.forEach(lead => doc.text(`Name: ${lead.name}, Email: ${lead.email}`));

    doc.addPage().text('Campaigns Report', { align: 'center' });
    campaigns.forEach(campaign => doc.text(`Name: ${campaign.name}, Budget: ${campaign.budget}`));

    doc.end();
};

// Generate CSV report
exports.generateCSVReport = async (req, res) => {
    const leads = await Lead.find();
    const fields = ['name', 'email', 'source'];
    const csv = parse(leads, { fields });

    res.header('Content-Type', 'text/csv');
    res.attachment('leads.csv');
    res.send(csv);
};
