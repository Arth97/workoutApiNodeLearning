const express = require('express');
const router = express.Router();

// Fichero con listado de rutas

const workoutController = require("../../controllers/workoutController");

router.get("/", workoutController.getAllWorkouts)
router.get("/:workoutId", workoutController.getOneWorkout)
router.post("/", workoutController.createNewWorkout)
router.patch("/:workoutId", workoutController.updateWorkout)
router.delete("/:workoutId", workoutController.deleteOneWorkout)


module.exports = router;