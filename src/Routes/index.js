const router = require('express').Router();

const apiEnterpriseRouter = require('../Entities/Enterprise');
const apiCityRouter = require('../Entities/City');
const apiRoleRouter = require('../Entities/Role');
const apiUserRouter = require('../Entities/User');
const apiDriverRouter = require('../Entities/Driver');
const apiStationRouter = require('../Entities/Station');
const apiOriginRouter = require('../Entities/Origin');
const apiDestinationRouter = require('../Entities/Destination');
const apiRouteRouter = require('../Entities/Route');
const apiBusRouter = require('../Entities/Bus');

router.use('/enterprises', apiEnterpriseRouter);
router.use('/cities', apiCityRouter);
router.use('/roles', apiRoleRouter);
//router.use('/peoples', apiPeopleRouter);
router.use('/users', apiUserRouter);
router.use('/drivers', apiDriverRouter);
router.use('/stations', apiStationRouter);
router.use('/origins', apiOriginRouter);
router.use('/destinations', apiDestinationRouter);
//router.use('/hours', apiHourRouter);
router.use('/buses', apiBusRouter);
router.use('/routes', apiRouteRouter);
module.exports = router;
