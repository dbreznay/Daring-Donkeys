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


router.get("/addtasks", async function (req, res) {
  const data = await db.Employee.findAll();
  const employees = data.map(obj => obj.dataValues);
  res.render("projectForm", { employees });
});

router.get("/taskviewer", (req, res) => {
  // console.log(req);

  res.render("projectViewer");
});

router.get("/directory", (req, res) => {
  //console.log(req);

  res.render("employeeDirectory");
});

router.post("/api/employee", function (req, res) {
  console.log(req.body);
  db.Employee.create({
    name: req.body.name,
    title: req.body.title,
    email: req.body.email,
    phone: req.body.phone
  })
    .then(function (dbEmployee) {
      res.json(dbEmployee);
    });
});

router.get("/api/employees/name/:name", function (req, res) {
  db.Employee.findOne({
    where: {
      name: req.params.name
    }
  })
    .then(function (dbEmployee) {
      res.json(dbEmployee);
    });
});



router.post("/api/project", async function (req, res) {
  console.log(req.body);
  const project = await db.Project.create({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  })
    const employee = await db.Employee.findOne({
      where: {
        id: req.body.EmployeeId
      }
    })
    project.addEmployee(employee);
    res.json(project);
});

router.get("/api/project", function (req, res) {
  console.log(req.body);
  db.Project.findAll({})
    .then(function (dbProject) {
      res.json(dbProject);
    });
});

router.get("/api/project/name/:name", function (req, res) {
  db.Project.findOne({
    where: {
      name: req.params.name
    }
  })
    .then(function (dbProject) {
      res.json(dbProject);
    });
});

router.post("/api/projectsemployees", function (req, res) {
  db.ProjectsEmployees.create({
    EmployeeId: req.params.employeeId,
    ProjectId: req.params.projectId
  })
    .then(function (dbProjectsEmployees) {
      res.json(dbProjectsEmployees);
    });
})

module.exports = router;