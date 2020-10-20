const router = require('express').Router();

const apiEnterpriseRouter = require('./../Enterprise');

router.use('/enterprises', apiEnterpriseRouter);

module.exports = router;
