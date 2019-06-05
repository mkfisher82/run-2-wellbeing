// require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

module.exports.handler = (event, context, callback) => {
  console.log('creating challenge charge...');

  // Pull out the amount and id for the charge from the POST
  //   console.log(event);
  const requestData = JSON.parse(event.body);
  // console.log(requestData);
  const { amount } = requestData;
  const token = requestData.token.id;

  // Headers to prevent CORS issues
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  return stripe.charges
    .create({
      // Create Stripe charge with token
      amount,
      source: token,
      currency: 'nzd',
      description: 'Run 2 Wellbeing Mental Health Challenge',
    })
    .then(charge => {
      // Success response
      // console.log(charge);
      const response = {
        headers,
        statusCode: 200,
        body: JSON.stringify({
          message: `Charge processed!`,
          charge,
        }),
      };
      callback(null, response);
    })
    .catch(err => {
      // Error response
      // console.log(err);
      const response = {
        headers,
        statusCode: 500,
        body: JSON.stringify({
          error: err.message,
        }),
      };
      callback(null, response);
    });
};
