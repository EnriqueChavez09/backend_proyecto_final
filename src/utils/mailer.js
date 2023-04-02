const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.G_USERNAME,
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;
