const City = require('./City.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.status(200).json({ cities });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const city = await City.findOne({
      where: { id: req.params.cityId },
    });
    console.log(city);
    res.status(200).json({ city });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const city = await City.create(body);
    res.status(201).json({ city });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await City.update(req.body, {
      where: { id: req.params.cityId },
    });
    res.status(200).json({
      success: 'City Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await City.destroy({
      where: { id: req.params.cityId },
    });
    res.status(204).json({
      success: 'City Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
