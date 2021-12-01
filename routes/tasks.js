const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM tasks;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/new", (req,res) => {
    console.log(req.params);
    console.log("[Task.js]---Adding New Task");
    res.send("resolved");
  });

  router.put("/:id", (req,res) => {
    //DB query here
    console.log("[Task.js]---Editing a Task");
    res.send("resolved");
  });

  router.delete("/:id", (req,res) => {
    //DB query here
    console.log("[Task.js]---Deleting a Task");
    res.send("resolved");
  });
  return router;
};