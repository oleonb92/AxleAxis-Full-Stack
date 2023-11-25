// routes/userRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// POST /register - User registration
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    if (User.findByEmail(email)) {
        return res.status(400).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save
    const newUser = new User(Date.now().toString(), firstName, lastName, email, hashedPassword);
    User.save(newUser);

    res.status(201).send('User registered');
});

module.exports = router;


// POST /login - User login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = User.findByEmail(email);

    // Check if the user exists
    if (!user) {
        return res.status(401).send('User not found');
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
        return res.status(401).send('Incorrect password');
    }

    // You can generate and send a JWT token here for authentication

    res.status(200).send('User logged in');
});


const nodemailer = require('nodemailer');

// ...

// Function to send an email
const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'your-email-service-provider',
        auth: {
            user: 'your-email-username',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email-username',
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Email sending failed:', error);
    }
};

// You can use the sendEmail function to send emails for verification and password reset.
