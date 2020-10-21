const router = require('express').Router();
const controller = require('./City.controller');

router.get('/', controller.getAll);
router.get('/:cityId', controller.getById);
router.post('/', controller.create);
router.put('/:cityId', controller.update);
router.delete('/:cityId', controller.delete);

module.exports = router;
