// src/server/index.ts

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface PhishingEmail {
  recipient: string;
  subject: string;
  body: string;
}

app.post('/send-phishing-email', async (req, res) => {
  const { recipient, subject, body }: PhishingEmail = req.body;

  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: recipient,
      subject: subject,
      html: body,
    });
    res.status(200).json({ message: 'Phishing email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});