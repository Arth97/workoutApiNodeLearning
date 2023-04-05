const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'OK', data: allWorkouts});
}

const getOneWorkout = (req, res) => {
  const { params: { workoutId } } = req;
  if (!workoutId) return;

  const oneWorkout = workoutService.getOneWorkout(workoutId);
  res.send({status: 'OK', data: oneWorkout})
}

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (!body.name || !body.mode || !body.equipment || !body.exercises)
    return;
  
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerrTips: body.trainerTips
  }
  const createdNewWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({status: 'OK', data: createdNewWorkout})
}

const updateWorkout = (req, res) => {
  const { 
    body,
    params: {workoutId}
   } = req

   if (!workoutId) return;

  const updateWorkout = workoutService.updateWorkout(workoutId, body);
  res.send({status: 'OK', data: updateWorkout});
}

const deleteOneWorkout = (req, res) => {
  const { 
    params: { workoutId }
  } = req;

  if (!workoutId) return;

  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({status: 'OK'})
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateWorkout,
  deleteOneWorkout
};