const db = require("../models");
const path = require('path');

module.exports = function(app, ejs) {

  app.set('views', path.join(__dirname, '../views'));
  app.get('/', function(req, res) {
    res.render('index');
  });

};
