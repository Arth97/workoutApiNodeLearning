const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// https://swagger.io/specification/
// https://www.npmjs.com/package/swagger-jsdoc
// https://www.npmjs.com/package/swagger-ui-express


// Metadata info about the API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: 'Crossfit WOD API', version: '1.0.0' },
  },
  apis: [
    "src/v1/routes/workoutRoutes.js",
    "src/v1/routes/recordRoutes.js",
    "src/v1/routes/memberRoutes.js",
    "src/Database/Workout.js",
    "src/Database/Record.js",
    "src/Database/Member.js"
  ]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'aplication/json');
    res.send(swaggetSpec);
  })

  console.log(`Version 1 Docs are avalible at http://localhost:${port}/api/v1/docs`);
}


module.exports = { swaggerDocs };