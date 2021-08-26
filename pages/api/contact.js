export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: `Message From ${req.body.subject}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><br /><p>Sent from:
      ${req.body.email}</p><br /><span>Name: ${
      req.body.name
    }</span><br /><p>Address:${
      req.body.address ? req.body.address : 'null'
    }</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send('email sent');
}
