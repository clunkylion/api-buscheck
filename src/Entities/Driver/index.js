const router = require('express').Router();
const controller = require('./Driver.controller');

router.get('/', controller.getAll);
router.get('/:driverId', controller.getById);
router.post('/', controller.create);
router.put('/:driverId', controller.update);
router.delete('/:driverId', controller.delete);

module.exports = router;
