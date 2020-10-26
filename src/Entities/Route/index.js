const router = require('express').Router();
const controller = require('./Route.controller');

router.get('/', controller.getAll);
router.get('/:routeId', controller.getById);
router.post('/', controller.create);
router.put('/:routeId', controller.update);
router.delete('/:routeId', controller.delete);

module.exports = router;
