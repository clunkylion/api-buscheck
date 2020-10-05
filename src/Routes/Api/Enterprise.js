const router = require('express').Router();

//get Model
const { Enterprise } = require('../../Lib/Mysql');
//enterprises Routes

//all enterprises
router.get('/', async (req, res) => {
  const enterprises = await Enterprise.findAll();
  res.json(enterprises);
});
//show
router.get('/:enterpriseId', async (req, res) => {
  const enterprise = await Enterprise.findOne({
    where: { id: req.params.enterpriseId },
  });
  res.json(enterprise);
});
//create
router.post('/', async (req, res) => {
  const enterprise = await Enterprise.create(req.body);
  res.json(enterprise);
});

//update
router.put('/:enterpriseId', async (req, res) => {
  await Enterprise.update(req.body, {
    where: { id: req.params.enterpriseId },
  });
  res.json({
    success: 'Enterprise Updated',
  });
});
//delete
router.delete('/:enterpriseId', async (req, res) => {
  await Enterprise.destroy({
    where: { id: req.params.enterpriseId },
  });
  res.json({
    success: 'Enterprise Deleted',
  });
});

module.exports = router;
