const router = require('express').Router();
const controller = require('./Station.controller');

router.get('/', controller.getAll);
router.get('/:stationId', controller.getById);
router.post('/', controller.create);
router.put('/:stationId', controller.update);
router.delete('/:stationId', controller.delete);

module.exports = router;
