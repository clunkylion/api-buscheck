const Bus = require('./Bus.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    res.status(200).json({ buses });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.getById = async (req, res) => {
  try {
    const bus = await Bus.findOne({
      where: { id: req.params.busId },
    });
    res.status(200).json({ bus });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const bus = await Bus.create(body);
    res.status(201).json({ bus });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.update = async (req, res) => {
  try {
    await Bus.update(req.body, {
      where: { id: req.params.busId },
    });
    res.status(200).json({
      success: 'Bus Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.delete = async (req, res) => {
  try {
    await Bus.destroy({
      where: { id: req.params.busId },
    });
    res.status(204).json({
      success: 'Bus Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
