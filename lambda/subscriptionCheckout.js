require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.handler = (event, context, callback) => {
  console.log('creating Subscription...');

  // Pull out the amount and id for the charge from the POST
  const requestData = JSON.parse(event.body);
  const { email } = requestData.token;
  const token = requestData.token.id;

  // Headers to prevent CORS issues
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  return stripe.customers
    .create({
      description: `Customer for ${email}`,
      email,
      source: token,
    })
    .then(custID => {
      console.log(`This is custID: ${custID.id}`);
      stripe.subscriptions.create({
        customer: custID.id,
        items: [
          {
            plan: 'fortnightlypaymentplan',
          },
        ],
      });
    })
    .then(subscription => {
      // Success response
      const response = {
        headers,
        statusCode: 200,
        body: JSON.stringify({
          message: `Subscription Created!`,
          subscription,
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
