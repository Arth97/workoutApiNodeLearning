const DB = require('./db.json')

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.filter(workout => workout.id === workoutId)
    console.log("record", record)
    if (!record)
      throw {
        status: error?.status || 400,
        message: `Cant't find workout with Id '${workoutId}'`
      }
    return record;

  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error
    }
  }
}

module.exports = { getRecordForWorkout }