const Destination = require('./Destination.model');
const Station = require('../Station/Station.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const destinations = await Destination.findAll({ include: Station });
    res.status(200).json({ destinations });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const destination = await Destination.findOne({
      where: { id: req.params.destinationId },
      include: { model: Station },
    });
    console.log(destination);
    res.status(200).json({ destination });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const destination = await Destination.create({
      StationId: body.StationId,
    });
    res.status(201).json({ destination });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Destination.update(req.body, {
      where: { id: req.params.destinationId },
    });
    res.status(200).json({
      success: 'Destination Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Destination.destroy({
      where: { id: req.params.destinationId },
    });
    res.status(204).json({
      success: 'Destination Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
