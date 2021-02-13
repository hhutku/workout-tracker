const Workout = require("../models/workout");

const express = require("express");
const router = express.Router();

router.post("/api/workouts", (req, res) => {

});

router.put("/api/workouts/:id", (req, res) => {
 
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
