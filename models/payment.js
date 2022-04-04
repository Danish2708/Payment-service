'use-strict'
var mongoose = require('mongoose');
var db = require('../db');

var paymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId },
    status: String
})

module.exports = db.model('payment', paymentSchema)