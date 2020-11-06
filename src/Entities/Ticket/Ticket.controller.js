const Ticket = require('./Ticket.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json({ tickets });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const ticket = await Ticket.findOne({
      where: { id: req.params.ticketId },
    });
    console.log(ticket);
    res.status(200).json({ ticket });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const ticket = await Ticket.create({
      price: body.price,
      serialNumer: body.serialNumber,
      UserId: body.userId,
      BusRouteId: body.BusRouteId,
    });
    res.status(201).json({ ticket });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Ticket.update(req.body, {
      where: { id: req.params.ticketId },
    });
    res.status(200).json({
      success: 'Ticket Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Ticket.destroy({
      where: { id: req.params.ticketId },
    });
    res.status(204).json({
      success: 'Ticket Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
