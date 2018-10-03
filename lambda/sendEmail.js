const sgMail = require('@sendgrid/mail');
const querystring = require('querystring');
// require('dotenv').config();

exports.handler = async (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // When the method is POST, the form data will be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const email = params.email;
  const plan = params.package;

  let template = 'd-2bf978e10ad84f45944f862d4bfc4c96';

  if (plan == 'Total Wellness') {
    template = 'd-399984ac34184d2fa48fd627afa337f1';
  }
  // Need step to check email address

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}');

  const msg = {
    template_id: template,
    from: process.env.NICOLE_EMAIL,
    personalizations: [
      {
        to: process.env.NICOLE_EMAIL,
        dynamic_template_data: { client_email: email },
      },
    ],
  };

  console.log(msg);

  await sgMail.send(msg, false, function(err) {
    if (err) {
      // throw err;
      return {
        statusCode: 302,
        headers: {
          Location: '/failure',
          'Cache-Control': 'no-cache',
        },
        body: '',
      };
    }
    return callback(null, {
      statusCode: 302,
      headers: {
        Location: '/success',
        'Cache-Control': 'no-cache',
      },
      body: '',
    });
  });
};
