require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function createCustomer(data) {
  stripe.customers.create(
    {
      description: `Customer for ${data.token.email}`,
      email: data.token.email,
      source: data.token.id,
    },
    (err, customer) => {
      console.log(customer);
      return customer.id;
    },
  );
}

module.exports.handler = (event, context, callback) => {
  console.log('creating charge...');

  // Pull out the amount and id for the charge from the POST
  //   console.log(event);
  const requestData = JSON.parse(event.body);
  // console.log(requestData);
  const { email } = requestData.token;
  const token = requestData.token.id;

  console.log(email);

  // Headers to prevent CORS issues
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  return stripe.customers
    .list({
      email,
    })
    .then(customers => {
      let custID = '';
      if (!customers.data[0]) {
        custID = createCustomer(requestData);
      } else {
        custID = customers.data[0].id;
      }
      return custID;
    })
    .then(custID => console.log(custID))
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
