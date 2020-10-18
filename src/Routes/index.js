const router = require('express').Router();

const apiEnterpriseRouter = require('./Api/Enterprise');

router.use('/enterprises', apiEnterpriseRouter);

module.exports = router;
