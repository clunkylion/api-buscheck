const router = require('express').Router();
const controller = require('./Origin.controller');

router.get('/', controller.getAll);
router.get('/:originId', controller.getById);
router.post('/', controller.create);
router.put('/:originId', controller.update);
router.delete('/:originId', controller.delete);

module.exports = router;
