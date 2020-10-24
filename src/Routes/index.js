const router = require('express').Router();

const apiEnterpriseRouter = require('../Entities/Enterprise');
const apiCityRouter = require('../Entities/City');
const apiRoleRouter = require('../Entities/Role');
const apiPeopleRouter = require('../Entities/People');
const apiUserRouter = require('../Entities/User');
const apiDriverRouter = require('../Entities/Driver');
router.use('/enterprises', apiEnterpriseRouter);
router.use('/cities', apiCityRouter);
router.use('/roles', apiRoleRouter);
router.use('/peoples', apiPeopleRouter);
router.use('/users', apiUserRouter);
router.use('/drivers', apiDriverRouter);
module.exports = router;
