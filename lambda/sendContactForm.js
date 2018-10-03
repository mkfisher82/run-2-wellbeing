const sgMail = require('@sendgrid/mail');
const querystring = require('querystring');
require('dotenv').config();

exports.handler = async (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // When the method is POST, the form data will be in the event body encoded as a query string
  const params = querystring.parse(event.body);

  const subject = 'New message from ' + params.name;

  let template = 'd-d0d803054b5f433ab2f6cd3863d3d1c4';

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}');

  const msg = {
    template_id: template,
    from: params.email,
    personalizations: [
      {
        to: process.env.NICOLE_EMAIL,
        dynamic_template_data: {
          body: params.message,
          emailSubject: subject,
        },
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
        Location: '/',
        'Cache-Control': 'no-cache',
      },
      body: '',
    });
  });
};
