const Route = require('./Route.model');
const Origin = require('../Origin/Origin.model');
const Destination = require('../Destination/Destination.model');
const Station = require('../Station/Station.model');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const routes = await Route.findAll({
      include: [
        {
          model: Origin,
          include: {
            model: Station,
          },
        },
        {
          model: Destination,
          include: {
            model: Station,
          },
        },
      ],
    });
    res.status(200).json({ data: { routes } });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const route = await Route.findOne({
      where: { id: req.params.RouteId },
    });
    res.status(200).json({ data: { route } });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const route = await Route.create({
      hour: body.hour,
      OriginId: body.OriginId,
      DestinationId: body.DestinationId,
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
