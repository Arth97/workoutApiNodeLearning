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

module.exports = { getRecordForWorkout }