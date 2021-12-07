const PhotoBus = require('./PhotoBus.model');
const multer = require('multer');
const controller = {};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../../Public/img/BusPhotos');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimeType === 'image/jpg' ||
    file.mimeType === 'image/jpeg' ||
    file.mimeType === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('La imagen debe ser jpg, jpeg o png'), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
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
      photoUrl: storage.data.photoURL
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
