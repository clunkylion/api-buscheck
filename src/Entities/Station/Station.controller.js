const City = require('../City/City.model');
const Station = require('./Station.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const stations = await Station.findAll({ include: City });
    res.status(200).json({ data: { stations } });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const station = await Station.findOne({
      where: { id: req.params.stationId },
      include: { model: City },
    });
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
      CityId: body.city_id,
    });
    res.status(201).json({ station });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    const body = req.body;
    await Station.update(
      {
        name: body.name,
        CityId: body.city_id,
      },
      {
        where: { id: req.params.stationId },
      }
    );
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
