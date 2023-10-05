const express = require("express");
const nodemailer = require("nodemailer");
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ recipient_email }) {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "imaratahang@gmail.com",
        },
      });
  
      const mailConfigs = {
        from: "imaratahang@gmail.com", 
        to: recipient_email,
        subject: "Welcome to DevLink!",
        text: "Thank you for subscribing to DevLink.",
      };
  
      transporter.sendMail(mailConfigs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: 'An error has occurred' });
        }
        return resolve({ message: "Email sent successfully" });
      });
    });
  }

app.get("/", (req, res) =>{
    sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/", (req, res) => {
    const recipient_email = req.body.recipient_email; // Get the recipient email from the request body
    sendEmail({ recipient_email })
      .then((response) => res.send(response.message))
      .catch((error) => res.status(500).send(error.message));
  });

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
  });