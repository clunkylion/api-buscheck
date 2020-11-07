const PhotoBus = require('./PhotoBus.model');
const multer = require('multer');
const upload = multer({ dest: '../../Public/img/BusPhotos' });
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const photos = await PhotoBus.findAll();
    res.status(200).json({ photos });
  } catch (err) {
    res.status(500);
  }
};

controller.getById = async (req, res) => {
  try {
    const photoBus = await PhotoBus.findOne({
      where: { id: req.params.photoBusId },
    });
    console.log(photoBus);
    res.status(200).json({ photoBus });
  } catch (err) {
    res.status(500);
  }
};

controller.create = async (req, res) => {
  try {
    const body = req.body;
    const photoBus = await PhotoBus.create({
      BusId: body.BusId,
    });
    res.status(201).json({ photoBus });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

controller.update = async (req, res) => {
  try {
    await PhotoBus.update(req.body, {
      where: { id: req.params.photoBusId },
    });
    res.status(200).json({
      success: 'Photo Updated',
    });
  } catch (err) {
    res.status(500);
  }
};

controller.delete = async (req, res) => {
  try {
    await PhotoBus.destroy({
      where: { id: req.params.photoBusId },
    });
    res.status(204).json({
      success: 'Photo Deleted',
    });
  } catch (err) {
    res.status(500);
  }
};

module.exports = controller;
