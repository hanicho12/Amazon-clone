const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
   "sk_test_51LJR0bKGRkVesVeUU1CCus7yjlCrGL5rTOb6ns24xkdku8uVJHSxEAFPHNRlAA6la54tNUi5zWjEgn5YlsUvThQj00OewQT79v"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  


// - Listen command
exports.api = functions.https.onRequest(app);

//(http://localhost:5001/app-85e81/us-central1/api).