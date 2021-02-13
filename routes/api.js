const Workout = require("../models/workout");

const express = require("express");
const router = express.Router();

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch(({ message }) => {
      console.log(message);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body }
    },
    { new: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then((workoutDB) => {
    res.json(workoutDB);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
