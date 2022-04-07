module.exports = app => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tutorials = require("../controllers/controller.js");

    var router = require("express").Router();
    // Create a new Tutorial
    app.route("/createnew").post(tutorials.create);
    // Retrieve all Tutorials
    app.route("/showcreated").get(tutorials.findAll);
    // Retrieve all published Tutorials
    app.route("/published").get(tutorials.findAllPublished);
    // Retrieve a single Tutorial with id
    app.route("/:id").get(tutorials.findOne);
    // Update a Tutorial with id
    app.route("/:id").put(tutorials.update);
    // Delete a Tutorial with id
    app.route("/:id").delete(tutorials.delete);
    // Delete all Tutorials
    app.route("/").delete(tutorials.deleteAll);

    app.use('/api/tutorials', router);
    
  }
  