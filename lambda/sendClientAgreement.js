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

  let template = 'd-2c81928394c0423b882635cef4062b29';

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.setSubstitutionWrappers('{{', '}}');

  const msg = {
    template_id: template,
    from: process.env.NICOLE_EMAIL,
    personalizations: [
      {
        to: process.env.NICOLE_EMAIL,
        dynamic_template_data: {
          firstname: params.firstname,
          lastname: params.lastname,
          date_of_birth: params.dob,
          email: params.email,
          agreement: params.accept,
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
