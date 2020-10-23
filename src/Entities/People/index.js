const router = require('express').Router();
const controller = require('./People.controller');

router.get('/', controller.getAll);
router.get('/:peopleId', controller.getById);
router.post('/', controller.create);
router.put('/:peopleId', controller.update);
router.delete('/:peopleId', controller.delete);

module.exports = router;
