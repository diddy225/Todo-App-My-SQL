class RestfulAPI {
  constructor(resourceName, app, model) {
    this.resource = resourceName;
    this.app = app;
    this.model = model;
  }

  delete() {
    this.app.delete(`${this.resource}/:id`, (req, res) => {
      this.model
        .destroy({
          where: {
            id: req.params.id
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  }

  update() {
    this.app.put(`${this.resource}/:id`, (req, res) => {
      this.model
        .update(
          {
            complete: req.body.complete
          },
          {
            where: {
              id: req.params.id
            }
          }
        )
        .then(function() {
          res.json(req.body.complete);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  }

  create() {
    this.app.post(`${this.resource}`, (req, res) => {
      this.model
        .create({
          item: req.body.item
        })
        .then(todo => {
          res.json(todo);
        })
        .catch(err => {
          res.json(err);
        });
    });
  }

  findAll() {
    this.app.get(`${this.resource}`, (req, res) => {
      this.model
        .findAll({})
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });
  }
}
module.exports = RestfulAPI;
