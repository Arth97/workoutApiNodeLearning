const recordService = require("../services/recordService")

const getRecordForWorkout = (req, res) => {
  const workoutId = req.params.workoutId

  if (!workoutId) 
    res.satus(400).send({
      status: 'FAILED',
      data: {error: "Parameter ':workoutId' cant not be empty"} 
    })

  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.send({
      status: "OK",
      data: record
    })
  } catch (err) {
    res.status(err?.status || 500).send({
      status: 'FAILED',
      data: {error: err?.message || err}
    })
  }
}

const addOneRecord = (req, res) => {
  const { body } = req

  if (!body.workout || !body.record) {
    res.status(400).send({
      status: 'FAILED',
      data: {error: 'One of the following parameters is missing or empty: workout, record'}
    })
    return;
  }

  const newRecord = {
    workout: body.workout,
    record: body.record
  }

  try {
    const createdRecord = recordService.addOneRecord(newRecord)
    res.status(201).send({
      status: 'OK',
      data: createdRecord
    })
  } catch (err) {
    res.status(err?.status || 500).send({status: 'FAILED', data: {
      error: err?.message || err
    }});
  }
}

module.exports = { 
  getRecordForWorkout,
  addOneRecord
}