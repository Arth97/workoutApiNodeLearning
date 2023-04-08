const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter(record => record.workout == workoutId)
    if (!record.length)
      throw {
        status: 400,
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

const addOneRecord = (newRecord) => {
  try {
    DB.records.push(newRecord);
    saveToDatabase(DB);
    return newRecord
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    }
  }
}

module.exports = { 
  getRecordForWorkout,
  addOneRecord
}