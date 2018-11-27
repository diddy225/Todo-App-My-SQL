const express = require('express');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();


const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const db = require("./models");

require('./routes/html-routes.js')(app, ejs);
require('./routes/api-routes.js')(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});