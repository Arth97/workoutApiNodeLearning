
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout")

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
}

const getOneWorkout = (workoutId) => {
  return Workout.getOneWorkout(workoutId)
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
    updatedAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
  }
  
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
}
const updateWorkout = (workoutId, update) => {
  const updatedWorkout = Workout.updateWorkout(workoutId, update);

  return updatedWorkout;
}

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId)
  return;
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};