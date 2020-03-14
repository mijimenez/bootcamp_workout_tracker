const router = require("express").Router();
const Workout = require("../models/workout.js");

// Post all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ type: -1 })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Add user's new workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
        });
});

// Range of 7 last workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .then(data => {
          console.log(data);
          data.reverse();
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});

// Update past workout by id
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
      .then(data => {
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});



module.exports = router;