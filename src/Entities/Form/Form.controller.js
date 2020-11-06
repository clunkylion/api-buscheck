const Form = require('./Form.model');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.status(200).json({ forms });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const form = await Form.findOne({
      where: { id: req.params.formId },
    });
    console.log(form);
    res.status(200).json({ form });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const form = await Form.create({
      type: body.type,
      description: body.description,
      status: body.status,
      BusRouteId: body.BusRouteId,
    });
    res.status(201).json({ form });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await Form.update(req.body, {
      where: { id: req.params.formId },
    });
    res.status(200).json({
      success: 'Form Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await Form.destroy({
      where: { id: req.params.formId },
    });
    res.status(204).json({
      success: 'Form Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
