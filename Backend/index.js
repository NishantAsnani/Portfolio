require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    try{
        console.log("Received contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.BOT_EMAIL,         
        to: process.env.EMAIL,      
        replyTo: req.body.email,            
        subject: `New Portfolio Message from ${req.body.name}`,
        text: `
    You have a new message from your portfolio website!
    
    Name: ${req.body.name}
    Email: ${req.body.email}
    
    Message:
    ${req.body.message}
  `
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).json({ message: 'Email sent successfully' });
    }
    
    catch(err){
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Failed to send email' });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})