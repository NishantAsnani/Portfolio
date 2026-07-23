require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const PORT=process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        console.log("Received contact form submission:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            family: 4,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            replyTo: email,
            subject: `Portfolio: New message from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #f5f5f5; border-radius: 8px;">
                    <h2 style="color: #FF7A18; margin: 0 0 24px; font-size: 20px;">New Portfolio Message</h2>
                    <p style="color: #8E8E93; font-size: 13px; margin: 0 0 4px;">FROM</p>
                    <p style="font-size: 15px; margin: 0 0 16px;">${name}</p>
                    <p style="color: #8E8E93; font-size: 13px; margin: 0 0 4px;">EMAIL</p>
                    <p style="font-size: 15px; margin: 0 0 16px;"><a href="mailto:${email}" style="color: #FF7A18; text-decoration: none;">${email}</a></p>
                    <hr style="border: none; border-top: 1px solid #1e1e1e; margin: 20px 0;" />
                    <p style="color: #8E8E93; font-size: 13px; margin: 0 0 8px;">MESSAGE</p>
                    <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch(err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Failed to send email' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})