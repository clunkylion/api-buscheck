const Hour = require('./Hour.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const hours = await Hour.findAll();
    res.status(200).json({ hours });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const hour = await Hour.findOne({
      where: { id: req.params.hourId },
    });
    console.log(hour);
    res.status(200).json({ hour });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const hour = await Hour.create(body);
    res.status(201).json({ hour });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Hour.update(req.body, {
      where: { id: req.params.hourId },
    });
    res.status(200).json({
      success: 'Hour Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Hour.destroy({
      where: { id: req.params.hourId },
    });
    res.status(204).json({
      success: 'Hour Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
