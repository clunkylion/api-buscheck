const Route = require('./Route.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const routes = await Route.findAll();
    res.status(200).json({ routes });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const route = await Route.findOne({
      where: { id: req.params.routeId },
    });
    console.log(route);
    res.status(200).json({ route });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const route = await Route.create({
      OriginId: body.originID,
      DestinationId: body.destinationId,
    });
    res.status(201).json({ route });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Route.update(req.body, {
      where: { id: req.params.routeId },
    });
    res.status(200).json({
      success: 'Route Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Route.destroy({
      where: { id: req.params.routeId },
    });
    res.status(204).json({
      success: 'Route Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
