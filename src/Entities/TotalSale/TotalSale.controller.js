const TotalSale = require('./TotalSale.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const totalSales = await TotalSale.findAll();
    res.status(200).json({ totalSales });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const totalSale = await TotalSale.findOne({
      where: { id: req.params.totalSaleId },
    });
    console.log(totalSale);
    res.status(200).json({ totalSale });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const totalSale = await TotalSale.create({
      total_sale: body.total_sale,
      total_students: body.total_students,
      total_quantity: body.total_quantity,
      UserId: body.UserId,
      BusRouteId: body.BusRouteId,
    });
    res.status(201).json({ totalSale });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

/*controller.update = async (req, res) => {
  try {
    await TotalSale.update(req.body, {
      where: { id: req.params.ticketId },
    });
    res.status(200).json({
      success: 'Ticket Updated',
    });
  } catch (err) {
    res.status(500);
  }
};*/

/*controller.delete = async (req, res) => {
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
};*/

module.exports = controller;
