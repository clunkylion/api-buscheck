const router = require('express').Router();
const controller = require('./Form.controller');

router.get('/', controller.getAll);
router.get('/:formId', controller.getById);
router.post('/', controller.create);
router.put('/:formId', controller.update);
router.delete('/:formId', controller.delete);

module.exports = router;
