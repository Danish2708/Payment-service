var paymentDao = require("../dao/paymentDao")

module.exports = {
    async processPayment(params) {
        params.status = 'Success'
        return await paymentDao.processPayment(params)
    }
}