const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  try {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: 'OK', data: allWorkouts})
  } catch (err){
    res.status(err?.status || 500).send({status: 'FAILED', message: err?.message || err});
  }
}

const getOneWorkout = (req, res) => {
  const { params: { workoutId } } = req;
  if (!workoutId)
    res.status(400).send({status: 'FAILED', message: 'workoutId can not be empty'});

  try {
    const oneWorkout = workoutService.getOneWorkout(workoutId);
    res.send({status: 'OK', data: oneWorkout})
  } catch (err) {
    res.status(err?.status || 500).send({status: 'FAILED', message: err?.message || err})
  }
}

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (!body.name || !body.mode || !body.equipment || !body.exercises)
    res.status(400).send({status: 'FAILED', data: {
      error: "One of the following fields is missing or is emtpy in request body: 'name, 'mode', 'equipment', 'exercice'"
    }});
  
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerrTips: body.trainerTips
  }

  try {
    const createdNewWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: 'OK', data: createdNewWorkout})
  } catch (err) {
    res.status(err?.status || 500).send({status: 'FAILED', data: {
      error: err?.message || err
    }});
  }
}

const updateWorkout = (req, res) => {
  const { 
    body,
    params: {workoutId}
   } = req

   if (!workoutId)
    res.status(400).send({status: 'FAILED', message: 'workoutId can not be empty'});

  try {
    const updateWorkout = workoutService.updateWorkout(workoutId, body);
    res.status(200).send({status: 'OK', data: updateWorkout});    
  } catch (err) {res.status(err?.status || 500).send({status: 'FAILED', message: err?.message || err})}
}

const deleteOneWorkout = (req, res) => {
  const { 
    params: { workoutId }
  } = req;

  if (!workoutId) 
    res.status(400).send({status: 'FAILED', message: 'workoutId can not be empty'});

  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({status: 'OK'})
  } catch (err) {res.status(err?.status || 500).send({status: 'FAILED', message: err?.message || err})}
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};