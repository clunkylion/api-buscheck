const router = require('express').Router();
const controller = require('./User.controller');

router.get('/', controller.getAll);
router.get('/:userId', controller.getById);
router.post('/', controller.create);
router.put('/:userId', controller.update);
router.delete('/:userId', controller.delete);

module.exports = router;
