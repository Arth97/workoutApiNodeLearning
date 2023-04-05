const express = require('express');
const workoutsApiV1 = require('./v1/routes/workoutRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/v1/workouts", workoutsApiV1);

/* Usando router, esta ya no se usa
app.get('/', (req, res) => {
  res.send("Is working!")
});*/ 

app.listen(PORT, () => console.log("Server Listening in port: ", PORT))