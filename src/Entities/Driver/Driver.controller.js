const People = require('../People/People.model');
const Driver = require('./Driver.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.status(200).json({ drivers });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.getById = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: { id: req.params.driverId },
    });
    res.status(200).json({ driver });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const people = await People.create({
      rut: body.rut,
      name: body.name,
      last_name: body.last_name,
      phone: body.phone,
      email: body.email,
      sex: body.sex,
      birth_date: body.birth_date,
    });
    const driver = await Driver.create({
      status: body.status,
      PersonId: people.id,
      EnterpriseId: body.enterpriseId,
    });
    res.status(201).json({
      message: 'Driver created',
      data: [people, driver],
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.update = async (req, res) => {
  try {
    await Driver.update(req.body, {
      where: { id: req.params.driverId },
    });
    res.status(200).json({
      success: 'Driver Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.delete = async (req, res) => {
  try {
    await Driver.destroy({
      where: { id: req.params.driverId },
    });
    res.status(204).json({
      success: 'Driver Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
