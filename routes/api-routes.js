const router = require("express").Router();
const Workout = require("../models/workout.js");

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

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
        });
});



module.exports = router;