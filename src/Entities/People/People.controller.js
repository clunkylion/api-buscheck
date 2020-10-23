const People = require('./People.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const peoples = await People.findAll();
    res.status(200).json({ peoples });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.getById = async (req, res) => {
  try {
    const peoples = await People.findOne({
      where: { id: req.params.peopleId },
    });
    res.status(200).json({ peoples });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const people = await People.create(body);
    res.status(201).json({ people });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.update = async (req, res) => {
  try {
    await People.update(req.body, {
      where: { id: req.params.peopleId },
    });
    res.status(200).json({
      success: 'People Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.delete = async (req, res) => {
  try {
    await People.destroy({
      where: { id: req.params.peopleId },
    });
    res.status(204).json({
      success: 'People Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
