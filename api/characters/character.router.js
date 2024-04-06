const express = require("express");

const characterRouter = express.Router();

const {
  create,
  getOne,
  getAll,
  getOneByName,
  updateOne,
  deleteOne,
} = require("./character.controller");

const { isAuth } = require("../middlewares/auth.middleware");

characterRouter.post("/", create);
characterRouter.get("/:id", getOne);
characterRouter.get("/", getAll);
characterRouter.get("/name/:name", getOneByName);
characterRouter.patch("/:id", [isAuth], updateOne);
characterRouter.delete("/:id", [isAuth], deleteOne);

module.exports = characterRouter;
