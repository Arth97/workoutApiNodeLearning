
const DB = require("./db.json")

const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    };
  }
}

const getOneWorkout = (id) => {
  try {
    return DB.workouts.find((wk) => wk.id == id);
  } catch (err) {
    throw {
      status: 400,
      message: `Can't find workout with the id '${id}'`
    };
  }
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1

  if (isAlreadyAdded) 
    throw {
      status: 400,
      message: `Workout with the name '${newWorkout.name} already exists`
    }

  try {
    DB.workouts.push(newWorkout)
    saveToDatabase(DB);
    return newWorkout;
  } catch (err)  {
    throw {
      status: 500,
      message: err?.message || err
    }
  }
}

const updateWorkout = (workoutId, updates) => {
  try {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId)

    if (workoutIndex === -1)
      throw { status: 400, message: `Can't find workout with id ${workoutId}'` }
    
    const workoutToUpdate = {
      ...DB.workouts[workoutIndex],
      ...updates,
      updatedAt: new Date().toLocaleString("en-US", {timezone: "UTC"})
    }
    DB.workouts[workoutIndex] = workoutToUpdate;
    saveToDatabase(DB)
    return workoutToUpdate;
  } catch (err) {
    throw {
      status: err?.status || 500,
      message: err?.message  || err
    }
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId)
    if (workoutIndex === -1)
      throw { status: 400, message: `Can't find workout with id ${workoutId}'` }

    DB.workouts.splice(workoutIndex, 1)
    saveToDatabase(DB);
  } catch (err) {
    throw {
      status: err?.status || 500,
      message: err?.message  || err
    }
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};