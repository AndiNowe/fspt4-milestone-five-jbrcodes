var express = require("express");
var router = express.Router();
const db = require("../model/helper");
//added this component for the following middleware
const bodyParser = require("body-parser");

//added this middleware - stackoverflows' opinion is that this was missing (as we used in hw)
router.use(bodyParser.json());

// GET student list
//old route line
// router.get("/", function(req, res, next) {
//   db("SELECT * FROM students;")
//   .then(results => {
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
// });

// just to check
router.get("/", (req, res) => {
  //Once connected, expects a response with a message
  res.send({ message: "Welcome to the API" });
});

router.get("/facebook", async (req, res) => {
  try {
    let results = await db("SELECT * FROM students ORDER BY id ASC;");
    //check
    console.log("RESULTS", results);
    //you should send back the full list of items with status
    res.status(200).send(results.data); //data is an array of all the rows in the table
    //Catch any errors
  } catch (err) {
    //Response to error, 404 status with message
    res.status(500).send({ error: err.message });
  }
});

// GET one student
// old line router.get("/:id", function(req, res, next) {
// I don't know what the next is for, but I can do it differently

router.get("/facebook/:id", async (req, res) => {
  //your code here

  //Get id from URL
  let id = req.params.id;

  //save the info from the student with that id on the database

  let sql = `
     SELECT *
     FROM students
     WHERE id = ${id}
   `;

  // try catch just in case there's errors
  try {
    //waiting for the whole databse and saving it on results
    let results = await db(sql);

    // response - the first item from results.data
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new student into the DB
// old line router.post("/", function(req, res, next) {

router.post("/facebook", async (req, res) => {
  //your code here

  //save the name and lastname (body)
  let { name, surname } = req.body;

  //for some reason, the req.body is getting the information correctly but INSERT INTO is not finding the fields firstname and lastname.

  let sql = `
    INSERT INTO students (firstname, lastname)
    VALUES ('${name}', ${surname})
  `;

  try {
    let results = await db(sql);

    //if the last line is succesful:
    results = await db("SELECT * FROM students");

    //just checking
    //console.log(results.data);
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// DELETE a student from the DB
router.delete("/facebook/:id", async (req, res) => {
  //your code here

  let id = req.params.id;

  try {
    let sql = `SELECT * FROM students WHERE id = ${id}`;

    let results = await db(sql);

    if (results.data.length === 1) {
      sql = `DELETE FROM students WHERE id = ${id}`;

      await db(sql);

      results = await db("SELECT * FROM items");

      res.send(results.data);
    } else {
      res.status(404).send({ error: "This student doesn't exist!" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
