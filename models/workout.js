const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date , default: Date.now },
    exercises: [
      {
        type: {
          type: String,
          required: "Please enter a type"
        },
        name: {
          type: String,
          required: "Please enter a name"

        },
        duration: {
          type: Number,
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((acc, exercis) => {
    return acc + exercis.duration;
  }, 0);

  return duration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
