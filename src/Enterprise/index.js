const router = require('express').Router();
const controller = require('./Enterprise.controller');

router.get('/', controller.getAll);
router.get('/enterpriseId', controller.getById);
router.post('/', controller.create);
router.put('/:enterpriseId', controller.update);
router.delete('/:enterpriseId', controller.delete);

module.exports = router;