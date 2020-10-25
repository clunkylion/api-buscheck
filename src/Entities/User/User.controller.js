const People = require('../People/People.model');
const User = require('./User.model');
const bcrypt = require('bcrypt');
const controller = {};

controller.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.getById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.create = async (req, res) => {
  try {
    const body = req.body;
    const passwordHashed = await bcrypt.hash(body.password, 10);
    const people = await People.create({
      rut: body.rut,
      name: body.name,
      last_name: body.last_name,
      phone: body.phone,
      email: body.email,
      sex: body.sex,
      birth_date: body.birth_date,
    });
    const user = await User.create({
      user_name: body.user_name,
      password: passwordHashed,
      status: body.status,
      PersonId: people.id,
      RoleId: body.roleId,
      EnterpriseId: body.enterpriseId,
    });
    res.status(201).json({
      message: 'User Created',
      data: [people, user],
    });
  } catch (err) {
    console.error();
    res.status(500);
  }
};
controller.update = async (req, res) => {
  try {
    const passwordHashed = await bcrypt.hash(req.body.password, 10);
    await User.update(
      {
        user_name: req.body.user_name,
        status: req.body.status,
        password: passwordHashed,
      },
      {
        where: { id: req.params.userId },
      }
    );
    res.status(200).json({
      success: 'User Updated',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
controller.delete = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.userId },
    });
    res.status(204).json({
      success: 'User Deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = controller;
