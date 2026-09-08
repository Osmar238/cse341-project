const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts in MongoDB',
  },
  host: 'https://cse341-project-iekg.onrender.com/', 
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js']; // Apunta a las rutas que ya creaste

/* Genera el archivo swagger.json */
swaggerAutogen(outputFile, endpointsFiles, doc);