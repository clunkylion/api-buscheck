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
const apiSeatRouter = require('../Entities/Seat');
const apiTicketRouter = require('../Entities/Ticket');
const apiTotalSaleRouter = require('../Entities/TotalSale');
const apiFormRouter = require('../Entities/Form');
const apiPhotoBusRouter = require('../Entities/PhotoBus');

router.use('/enterprises', apiEnterpriseRouter);
router.use('/cities', apiCityRouter);
router.use('/roles', apiRoleRouter);
router.use('/users', apiUserRouter);
router.use('/drivers', apiDriverRouter);
router.use('/stations', apiStationRouter);
router.use('/origins', apiOriginRouter);
router.use('/destinations', apiDestinationRouter);
router.use('/buses', apiBusRouter);
router.use('/routes', apiRouteRouter);
router.use('/seats', apiSeatRouter);
router.use('/tickets', apiTicketRouter);
router.use('/totalSales', apiTotalSaleRouter);
router.use('/forms', apiFormRouter);
router.use('photoBuses', apiPhotoBusRouter);
module.exports = router;
