const express = require('express');
const request = require('request');
const config = require('config');
const paypal = require('paypal-rest-sdk');
const router = express.Router();

const User = require('../../models/User');

//set paypal to profile
paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id: config.get('paypalClientId'),
  client_secret: config.get('paypalSecret')
});

// @route    GET api/paypal/pay
// @desc     pay a user
// @access   Public
router.get('/pay', (req, res) => {
  try {
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'http://localhost:5000/success',
        cancel_url: 'http://localhost:5000/cancel'
      },
      transactions: [
        //this can all be set in a form on the client side and be added by body-parser
        {
          item_list: {
            items: [
              {
                name: 'Private lesson',
                sku: '001',
                price: '75.00',
                currency: 'USD',
                quantity: 1
              }
            ]
          },
          amount: {
            currency: 'USD',
            total: '1.00'
          },
          description: 'private lesson for students.'
        }
      ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
        throw error;
      } else {
        console.log('Create Payment Response');
        console.log(payment);
        res.send('test');
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
