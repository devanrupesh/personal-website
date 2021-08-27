const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({ name, msg }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: msg.to,
            },
          ],
          subject: msg.subject,
        },
      ],
      from: {
        email: msg.from,
        name: name,
      },
      content: [
        {
          type: 'text/html',
          value: msg.html,
        },
      ],
    }),
  });
};

export { sendEmail };
