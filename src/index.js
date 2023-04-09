const express = require('express');
const workoutsApiV1 = require('./v1/routes/workoutRoutes');
const recordsApiV1 = require('./v1/routes/recordRoutes');
const membersApiV1 = require('./v1/routes/memberRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/v1/workouts", workoutsApiV1);
app.use("/api/v1/records", recordsApiV1);
app.use("/api/v1/members", membersApiV1);

/* Usando router, esta ya no se usa
app.get('/', (req, res) => {
  res.send("Is working!")
});*/ 

app.listen(PORT, () => console.log("Server Listening in port: ", PORT))