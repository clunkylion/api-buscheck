const User = require('./User.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.getById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create(body);
    res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.update = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.userId },
    });
    res.status(200).json({
      success: 'User Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.delete = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.userId },
    });
    res.status(204).json({
      success: 'User Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
