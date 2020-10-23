const router = require('express').Router();
const controller = require('./Role.controller');

router.get('/', controller.getAll);
router.get('/:roleId', controller.getById);
router.post('/', controller.create);
router.put('/:roleId', controller.update);
router.delete('/:roleId', controller.delete);

module.exports = router;
