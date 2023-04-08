const Record = require("../database/Record")
const { v4: uuid } = require("uuid");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record
  } catch (err) {
    throw err;
  }
}

const addOneRecord = (newRecord) => {
  const recordToInsert = {
    id: uuid(),
    workoutId: newRecord.workoutId,
    record: newRecord.record
  }

  try {
    return Record.addOneRecord(recordToInsert)
  } catch (err) {
    throw err;
  }
}

module.exports = { 
  getRecordForWorkout,
  addOneRecord
}