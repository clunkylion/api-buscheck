const router = require('express').Router();
const controller = require('./Ticket.controller');

router.get('/', controller.getAll);
router.get('/:ticketId', controller.getById);
router.post('/', controller.create);
router.put('/:ticketId', controller.update);
router.delete('/:ticketId', controller.delete);

module.exports = router;
