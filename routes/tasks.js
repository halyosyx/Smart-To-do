const express = require('express');
const router = express.Router();
const { isMovie, isRestaurant, isBook } = require('../helper-functions/find-category');

const addNewTask = function (db, task, category) {
  console.log(task);
  db.query(`SELECT id FROM categories where name = $1`, [category])
    .then(data => {

      db.query(`INSERT INTO tasks (name,category_id,user_id)
    VALUES($1,$2,$3) `, [task, data.rows[0]['id'], 1]); //need to change user id once we set session cookies.
    })// data.rows[0]['id']

}
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

  router.post("/new", (req, res) => {
    const task = req.body.content;
    isMovie(task).then(
      (movie) => {
        if (movie['results'] && movie['results'][0].title.toUpperCase() === task.toUpperCase()) {
          console.log("Category of Task is ---to_watch");
          addNewTask(db, task, 'to_watch');
          res.end("resolved");
        } else {
          return task;
        }
      }).then((task) => {
        if(!task) return;
        isBook(task).then(({ results }) => {
          console.log("Book results----" + task);
          if (results && results[0].title.toUpperCase() === task.toUpperCase()) {
            console.log("Category of Task is----to_read");
            addNewTask(db, task, 'to_read');
            res.end("resolved");
          } else {
            return task;
          }
        }).then((task) => {
          if(!task) return;
          isRestaurant(task).then((restaurant) => {
            console.log("restaurant----" + task);
            if ((restaurant && restaurant.businesses[0] && restaurant.businesses[0].name.toUpperCase() === task.toUpperCase())) {
              console.log({ restaurant });
              console.log("Category of Task is ---to_eat");
              addNewTask(db, task, 'to_eat');
              res.end("resolved");
            } else {
              return task;
            }
          }).then(task => {
            if(!task) return;
            console.log("Category of Task is----to_buy", task);
            addNewTask(db, task, 'to_buy');
            res.end("resolved");
          })
        }).catch(err => console.log(err.message))

        // .then((task) => 
        //   {
        //     console.log("Category of Task is----to_buy");
        //     addNewTask(db, task, 'to_buy');
        //     res.end("resolved");
        //   })
        // .catch(e => {
        //   console.log(e);
        //   // console.log("[Task.js]---Adding New Task");
        //   res.end("resolved");
        })

      })


    //EDIT ROUTE
    router.put("/:id", (req, res) => {
      //DB query here
      console.log("[Task.js]---Editing a Task");
      res.send("resolved");
    });

    router.delete("/:id", (req, res) => {
      //DB query here
      console.log("[Task.js]---Deleting a Task");
      res.send("resolved");
    });
    return router;
  };
