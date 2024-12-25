const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors"); // ייבוא CORS
const nodemailer = require("nodemailer");

const corsHandler = cors({ origin: true }); // הגדרת CORS לכל הדומיינים (אפשר גם להגדיר Origin ספציפי)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendContactEmail = onRequest(async (req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "itailevin@dustofwar.net",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  });
});
