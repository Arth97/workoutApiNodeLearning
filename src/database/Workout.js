
const DB = require("./db.json")

const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
}

const getOneWorkout = (id) => {
  return DB.workouts.find((wk) => wk.id == id);
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1

  if (isAlreadyAdded) return;

  DB.workouts.push(newWorkout)
  saveToDatabase(DB);
  return newWorkout;
}

const updateWorkout = (workoutId, updates) => {
  const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId)
  if (workoutIndex === -1) return;

  const workoutToUpdate = {
    ...DB.workouts[workoutIndex],
    ...updates,
    updatedAt: new Date().toLocaleString("en-US", {timezone: "UTC"})
  }

  DB.workouts[workoutIndex] = workoutToUpdate;
  console.log("DB", DB)
  saveToDatabase(DB)
  return workoutToUpdate;
}

const deleteOneWorkout = (workoutId) => {
  console.log("test")
  const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId)
  console.log("workoutIndex", workoutIndex)
  if (workoutIndex === -1) return;
  DB.workouts.splice(workoutIndex, 1)
  saveToDatabase(DB);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};