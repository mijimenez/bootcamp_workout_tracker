const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, required: true },
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
});

workoutSchema.virtual("totalDuration").get(function() {
  // Add duration of each object by referring to the first index
  return this.exercises.reduce(function(total, exercise) {
    return total + exercise.duration
  }, 0);
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;