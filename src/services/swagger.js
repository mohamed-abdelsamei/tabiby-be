const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');


module.exports = (app) => {
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Tabiby API',
        description: 'Customer API Information',
        contact: {
          name: 'Amazing Developer',
        },
        servers: ['http://localhost:3000'],
        host: 'http://localhost:3000',
      },
      basePath: '/api',
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
      security: [
        {
          Bearer: [],
        },
      ],

    },
    apis: [
      path.join(__dirname, '../api/v1/routes/*.route.js'),
      path.join(__dirname, '../api/v1/models/*.model.js'),
    ],
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);


  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
  });
};
