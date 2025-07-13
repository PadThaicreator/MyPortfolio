
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const MailController = {
  contactMe: async (req, res) => {
    try {
      const { subject, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS, 
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: subject,
        text: message,
      };
      await transporter.sendMail(mailOptions);

     
      res.status(200).json({ message: "ส่งอีเมลสำเร็จแล้ว!" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};
