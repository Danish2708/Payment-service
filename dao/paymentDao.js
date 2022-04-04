var payment = require("../models/payment")

module.exports = {
    async processPayment(params) {
        return await payment.create(params)
    }
}