const router = require('express').Router();
const controller = require('./Hour.controller');

router.get('/', controller.getAll);
router.get('/:hourId', controller.getById);
router.post('/', controller.create);
router.put('/:hourId', controller.update);
router.delete('/:hourId', controller.delete);

module.exports = router;
