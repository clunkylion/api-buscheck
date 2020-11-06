const Seat = require('./Seat.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).json({ seats });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const seat = await Seat.findOne({
      where: { id: req.params.seatId },
    });
    console.log(seat);
    res.status(200).json({ seat });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const seat = await Seat.create({
      status: body.status,
      number: body.number,
      busId: body.busId,
    });
    res.status(201).json({ seat });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Seat.update(req.body, {
      where: { id: req.params.seatId },
    });
    res.status(200).json({
      success: 'Seat Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Seat.destroy({
      where: { id: req.params.seatId },
    });
    res.status(204).json({
      success: 'Seat Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
