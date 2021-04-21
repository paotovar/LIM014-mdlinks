const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock // configuracion
  .mock('https://www.npmjs.com/package/123456789', 404)
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://www.laboratoriaaaaa.la/', () => {
    throw new Error('ERROR_MESSAGE');
  })
  .mock('https://nodeeeeeeeejs.org/es/', () => {
    throw new Error('ERROR_MESSAGE');
  })
  .mock('https://nodejs.org/es/', 200);

module.exports = fetchMock;
