const db = require("../models");
const RestfulAPI = require("./restclass");

module.exports = function(app) {
  const getItems = new RestfulAPI("/todo", app, db.Todo);
  getItems.findAll();

  const createItem = new RestfulAPI("/todo", app, db.Todo);
  createItem.create();

  const complete = new RestfulAPI("/todo", app, db.Todo);
  complete.update();

  const removeTodo = new RestfulAPI("/todo", app, db.Todo);
  removeTodo.delete();
};
