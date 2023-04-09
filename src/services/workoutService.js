
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout")

const getAllWorkouts = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (err) {
    throw err;
  }
}

const getOneWorkout = (workoutId) => {
  try {
    return Workout.getOneWorkout(workoutId)
  } catch (err) {
    throw err;
  }
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
    updatedAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
  }
  
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (err) {
    throw err;
  }
}

const updateWorkout = (workoutId, update) => {
  try {
    const updatedWorkout = Workout.updateWorkout(workoutId, update);
    return updatedWorkout;
  } catch (err) {
    throw err;
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId)
    return;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};