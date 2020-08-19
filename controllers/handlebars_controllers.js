var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", (req, res) => {

  res.render("index");
});

router.get("/addemployees", (req, res) => {
    // console.log(req);
        res.render("employees");
}); 
  

router.get("/addtasks", (req, res) => {
     // console.log(req);
    
        res.render("projectForm");
    });

router.get("/taskviewer", (req, res) => {
        // console.log(req);
       
        res.render("projectViewer");
    });

router.get("/directory", (req, res) => {
        //console.log(req);
       
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

router.get("/api/employees/name/:name", function(req, res) {
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
        start: req.body.start,
        end: req.body.end
    })
      .then(function(dbProject) {
        res.json(dbProject);
      });
});

router.get("/api/project", function(req, res) {
  console.log(req.body);
  db.Project.findAll({})
    .then(function(dbProject) {
      res.json(dbProject);
    });
});


module.exports = router;