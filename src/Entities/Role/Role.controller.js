const Role = require('./Role.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json({ roles });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: { id: req.params.roleId },
    });
    res.status(200).json({ role });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const role = await Role.create(body);
    res.status(201).json({ role });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Role.update(req.body, {
      where: { id: req.params.roleId },
    });
    res.status(200).json({
      success: 'Role Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Role.destroy({
      where: { id: req.params.roleId },
    });
    res.status(204).json({
      success: 'Role Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
