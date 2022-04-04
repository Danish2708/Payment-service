var express = require('express');
var router = express.Router();

router.use('/payment', require('./paymentRoute').router);


module.exports.router = router;