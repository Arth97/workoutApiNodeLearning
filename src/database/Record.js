const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllRecords = () => {
  try {
    return DB.records;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    }
  }
}

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter(record => record.workout == workoutId)
    if (!record.length)
      throw {
        status: 400,
        message: `Cant't find workout with Id '${workoutId}'`
      }
    return record;

  } catch (err) {
    throw {
      status: err?.status || 500,
      message: err?.message || err
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
  addOneRecord,
  getAllRecords
}