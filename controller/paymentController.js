var paymentService = require("../service/paymentService")

module.exports = {
     processPayment: async function(req, res) {
        try {
            let paymentData = await paymentService.processPayment(req.body)

            console.log('i am data' + paymentData)

            res.status(200).send({ paymentData, message: "Payment Successful" })
        } catch (error) {
            res.status(400).send({ error: true, message: error.message })
        }
    }
}
