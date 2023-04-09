
const DB = require("./db.json")

const { saveToDatabase } = require("./utils");

const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode)
      workouts = workouts.filter(workout =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    if (filterParams.equipment)
      workouts = workouts.filter(workout =>
        workout.equipment.includes(filterParams.equipment)
      )
    if (filterParams.length)
      workouts = workouts.slice(0, filterParams.length)
    return workouts;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    };
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);

    if (!workout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

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