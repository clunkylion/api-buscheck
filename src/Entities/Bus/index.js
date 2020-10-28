const router = require('express').Router();
const controller = require('./Bus.controller');

router.get('/', controller.getAll);
router.get('/:busId', controller.getById);
router.post('/', controller.create);
router.put('/:busId', controller.update);
router.delete('/:busId', controller.delete);

module.exports = router;
