const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
      duration: { type: Number, required: true },
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]
}, {
  toJSON: {
    // Ad virtuals property below when schema is requested
    virtuals: true
  }
});

workoutSchema.virtual("totalDuration").get(function() {
  // Add duration of each object by referring to the first index
  // Advanced alternative to custom model
  return this.exercises.reduce(function(total, exercise) {
    return total + exercise.duration
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;