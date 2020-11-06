const router = require('express').Router();
const controller = require('./TotalSale.controller');

router.get('/', controller.getAll);
router.get('/:totalSaleId', controller.getById);
router.post('/', controller.create);
//router.put('/:totalSaleId', controller.update);
//router.delete('/:totalSaleId', controller.delete);

module.exports = router;
