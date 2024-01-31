const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahul.x.jaiswal@fosteringlinux.com', // Replace with your email
    pass: 'Raj@#$_&_$#@-++-j21', // Replace with your email password
  },
});

// Endpoint for handling form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: 'rahul.x.jaiswal@fosteringlinux.com', // Replace with your email
    to: 'rj483313@gmail.com', // Replace with the recipient email
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Form submitted successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
