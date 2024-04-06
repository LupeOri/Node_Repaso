const Character = require("./character.model");

const create = async (req, res, next) => {
  try {
    const character = await Character.create(req.body);
    res.json({
      status: 201,
      msg: "creado",
      data: character,
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const character = await Character.findById(id);
    if (!character) {
      return res.status(404).json({
        status: 404,
        msg: "Personaje no encontrado",
        data: null,
      });
    }
    res.json({
      status: 200,
      msg: "ok",
      data: character,
    });
  } catch (error) {
    next(error);
  }
};

const getOneByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const character = await Character.findOne({ name: name });
    if (!character) {
      return res.status(404).json({
        status: 404,
        msg: "Personaje no encontrado",
        data: null,
      });
    }
    res.json({
      status: 200,
      msg: "ok",
      data: character,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.json({
      status: 200,
      msg: "ok",
      data: characters,
    });
  } catch (error) {
    next(error);
  }
};

const updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const character = await Character.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!character) {
      return res.status(404).json({
        status: 404,
        msg: "Personaje no encontrado",
        data: null,
      });
    }
    res.json({
      status: 200,
      msg: "ok",
      data: character,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const character = await Character.findByIdAndDelete(id);
    if (!character) {
      return res.status(404).json({
        status: 404,
        msg: "Personaje no encontrado",
        data: null,
      });
    }
    res.json({
      status: 200,
      msg: "ok",
      data: character,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getOne, getAll, getOneByName, updateOne, deleteOne };
