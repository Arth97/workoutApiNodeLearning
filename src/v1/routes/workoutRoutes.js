const express = require('express');
const apicache = require('apicache');

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *       - in: query
 *         name: equipment
 *         schema:
 *           type: string
 *         description: The equipment of a workout
 *       - in: query
 *         name: length
 *         schema:
 *           type: string
 *         description: The number of a workouts
 */
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts)

/**
 * @openapi
 * /api/v1/workouts/{workoutId}:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workoutId
 *         schema:
 *           type: string
 *         description: The id of a workout
 */
router.get("/:workoutId", workoutController.getOneWorkout)

/**
 * @openapi
 * /api/v1/workouts/{workoutId}/records:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workoutId
 *         schema:
 *           type: string
 *         description: The id of a workout
 */
router.get("/:workoutId/records", recordController.getRecordForWorkout)

/**
 * @openapi
 * /api/v1/workouts:
 *   post:
 *     tags:
 *       - Workouts
 */
router.post("/", workoutController.createNewWorkout)

/**
 * @openapi
 * /api/v1/workouts:
 *   patch:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workoutId
 *         schema:
 *           type: string
 *         description: The id of a workout
 */
router.patch("/:workoutId", workoutController.updateWorkout)

/**
 * @openapi
 * /api/v1/workouts:
 *   delete:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 */
router.delete("/:workoutId", workoutController.deleteOneWorkout)


module.exports = router;