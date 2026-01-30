const { request } = require('pactum');

// Definimos a URL base uma única vez aqui
const setup = () => {
  request.setBaseUrl('https://petstore.swagger.io/v2');
};

module.exports = { setup };