const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

exports.sendAlertEmail = async (subject, message) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: 'alert@example.com',
        subject: subject,
        text: message
    });
};
