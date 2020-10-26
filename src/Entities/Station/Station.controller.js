const Station = require('./Station.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.status(200).json({ stations });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const station = await Station.findOne({
      where: { id: req.params.stationId },
    });
    console.log(station);
    res.status(200).json({ station });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const station = await Station.create({
      name: body.name,
      city_id: body.city_id,
    });
    res.status(201).json({ station });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Station.update(req.body, {
      where: { id: req.params.stationId },
    });
    res.status(200).json({
      success: 'Bus Station Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Station.destroy({
      where: { id: req.params.stationId },
    });
    res.status(204).json({
      success: 'Bus Station Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
