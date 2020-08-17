var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", (req, res) => {

  res.render("index");
});

router.get("/addemployee", (req, res) => {
    // console.log(req);

        res.render("employees");
    });

router.get("/addproject", (req, res) => {
     // console.log(req);
    
        res.render("projectForm");
    });

router.get("/schedule", (req, res) => {
        // console.log(req);
       
        res.render("calendar");
    });

router.get("/directory", (req, res) => {
       // console.log(req);
       
        res.render("employeeDirectory");
    });

router.post("/api/employee", function(req, res) {
    console.log(req.body);
    db.Employee.create({
        name: req.body.name,
        title: req.body.title,
        email: req.body.email,
        phone: req.body.phone
    })
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      });
});

router.get("/api/employees/:name", function(req, res) {
    db.Employee.findOne({
      where: {
        name: req.params.name
      }
    })
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      });
});



router.post("/api/project", function(req, res) {
    console.log(req.body);
    db.Project.create({
        name: req.body.name,
        number: req.body.number,
        client: req.body.client,
    })
      .then(function(dbProject) {
        res.json(dbProject);
      });
});


module.exports = router;