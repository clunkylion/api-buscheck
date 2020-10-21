const router = require('express').Router();

const apiEnterpriseRouter = require('./../Enterprise');
const apiCityRouter = require('./../City');
router.use('/enterprises', apiEnterpriseRouter);
router.use('/cities', apiCityRouter);
module.exports = router;
