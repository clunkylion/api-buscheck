const Origin = require('./Origin.model');
const Station = require('../Station/Station.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const origins = await Origin.findAll({ include: Station });
    res.status(200).json({ origins });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const origin = await Origin.findOne({
      where: { id: req.params.originId },
      include: { model: Station },
    });
    console.log(origin);
    res.status(200).json({ origin });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const origin = await Origin.create({
      StationId: body.StationId,
    });
    res.status(201).json({ origin });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Origin.update(req.body, {
      where: { id: req.params.originId },
    });
    res.status(200).json({
      success: 'Origin Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Origin.destroy({
      where: { id: req.params.originId },
    });
    res.status(204).json({
      success: 'Origin Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
