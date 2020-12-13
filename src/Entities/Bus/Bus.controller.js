const Bus = require('./Bus.model');
const Seat = require('../Seat/Seat.model');
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
    const busSeats = await Seat.findAll({
      where: { busId: req.params.busId },
    });
    res.status(200).json({
      data: { bus, seats: busSeats },
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const bus = await Bus.create({
      patent: body.patent,
      status: body.status,
      brand: body.status,
      model: body.model,
      technical_review: body.technical_review,
      seats: body.seats,
    });
    for (let i = 1; i < bus.seats; i++) {
      const seats = await Seat.create({
        status: 'Active',
        number: i,
        BusId: bus.id,
      });
    }
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
