var express = require("express");
var router = express.Router();

var employee = require("../models/employee");

var project = require("../models/project");

var schedule = require("../models/schedule");

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

// router.post("/api/burger", (req, res) => {
//     burger.insertOne("burger_name", req.body.burger_name, result => {
//         res.json({id: result.insertId});
//     });
// });

// router.put("/api/burger/:id", (req, res) => {
//     //creates id = id
//     var burgerId = req.params.id;
  
//     burger.updateOne(burgerId, result => {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
// Export routes for server.js to use.
module.exports = router;