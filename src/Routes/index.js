const router = require('express').Router();

const apiEnterpriseRouter = require('../Entities/Enterprise');
const apiCityRouter = require('../Entities/City');
router.use('/enterprises', apiEnterpriseRouter);
router.use('/cities', apiCityRouter);
module.exports = router;
