const router = require('express').Router();
const controller = require('./Seat.controller');

router.get('/', controller.getAll);
router.get('/:seatId', controller.getById);
router.post('/', controller.create);
router.put('/:seatId', controller.update);
router.delete('/:seatId', controller.delete);

module.exports = router;
