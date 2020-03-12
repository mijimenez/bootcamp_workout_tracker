const router = require("express").Router();
const exerciseDb = require("../exercise.js");

// router.get("/api/workouts", (req, res) => {
//     exerciseDb.Workout.find({})
//         .sort({ day: 1 })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;