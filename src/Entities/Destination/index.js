const router = require('express').Router();
const controller = require('./Destination.controller');

router.get('/', controller.getAll);
router.get('/:destinationId', controller.getById);
router.post('/', controller.create);
router.put('/:destinationId', controller.update);
router.delete('/:destinationId', controller.delete);

module.exports = router;
