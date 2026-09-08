const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts in MongoDB',
  },
  // Exactamente así: sin http:// y sin diagonal / al final
  host: 'cse341-project-iekg.onrender.com', 
  // Obligamos a que use conexión segura
  schemes: ['https'], 
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);