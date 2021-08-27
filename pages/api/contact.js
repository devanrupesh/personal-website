export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
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

  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // const msg = {
  //   to: process.env.TO_EMAIL, // Change to your recipient
  //   from: process.env.FROM_EMAIL, // Change to your verified sender
  //   subject: `Message From ${req.body.subject}`,
  //   text: req.body.message + ' | Sent from: ' + req.body.email,
  //   html: `<div>${req.body.message}</div><br /><p>Sent from:
  //     ${req.body.email}</p><br /><span>Name: ${
  //     req.body.name
  //   }</span><br /><p>Address:${
  //     req.body.address ? req.body.address : 'null'
  //   }</p>`,
  // };

  // sgMail
  //   .send(msg)
  //   .then((response) => {
  //     console.log(response[0].statusCode);
  //     console.log(response[0].headers);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  res.send('email sent');
}

// import { sendEmail } from '../../lib/sendMail';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const msg = {
//       to: process.env.TO_EMAIL, // Change to your recipient
//       from: process.env.FROM_EMAIL, // Change to your verified sender
//       subject: `Message From ${req.body.subject}`,
//       text: req.body.message + ' | Sent from: ' + req.body.email,
//       html: `<div>${req.body.message}</div><br /><p>Sent from:
//       ${req.body.email}</p><br /><span>Name: ${
//         req.body.name
//       }</span><br /><p>Address:${
//         req.body.address ? req.body.address : 'null'
//       }</p>`,
//     };

//     const { name } = req.body;
//     await sendEmail({ name, msg });
//     return res.status(200).end();
//   }
//   return res.status(404).json({
//     error: {
//       code: 'not_found',
//       messgae:
//         "The requested endpoint was not found or doesn't support this method.",
//     },
//   });
// };
