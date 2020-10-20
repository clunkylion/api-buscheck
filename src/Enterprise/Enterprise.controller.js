const Enterprise = require('./Enterprise.model');

const controller = {}

controller.getAll = async(req, res) => {
  try {
    const enterprises = await Enterprise.findAll();
    res.status(200).json(enterprises);
  } catch(err){
    res.status(500);
  }
}

controller.getById = async(req, res) => {
  try {
    const enterprise = await Enterprise.findOne({
      where: { id: req.params.enterpriseId },
    });
    res.status(200).json(enterprise);
  }catch(err){
    res.status(500);
  }
}

controller.create = async(req, res) => {
  try{
    const body = req.body
    const enterprise = await Enterprise.create(body);
    res.status(201).json({enterprise});
  }catch(err){
    console.log(err);
    res.status(500).json({err})
  }
}

controller.update = async(req, res) => {
  try{
    await Enterprise.update(req.body, {
      where: { id: req.params.enterpriseId },
    });
    res.status(200).json({
      success: 'Enterprise Updated',
    });
  }catch(err){
    res.status(500);
  }
}

controller.delete = async(req, res) => {
  try{
    await Enterprise.destroy({
      where: { id: req.params.enterpriseId },
    });
    res.status(204).json({
      success: 'Enterprise Deleted',
    });
  }catch(err){
    res.status(500);
  }
}

module.exports = controller;
