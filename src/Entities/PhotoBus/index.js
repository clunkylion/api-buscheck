const router = require('express').Router();
const controller = require('./PhotoBus.controller');

router.get('/', controller.getAll);
router.get('/:photoBusId', controller.getById);
router.post('/', controller.create);
router.put('/:photoBusId', controller.update);
router.delete('/:photoBusId', controller.delete);

module.exports = router;
