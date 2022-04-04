var express = require('express');
var router = express.Router();
var paymentController = require("../controller/paymentController");


router.post('/processPayment', paymentController.processPayment)


module.exports.router = router