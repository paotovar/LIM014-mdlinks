const path = require('path');
const { stats } = require('../src/utils/stats');

const cwd = process.cwd();
const userRoute = path.join(cwd, 'test', 'fileTest', 'README.md');

const objOutput = { total: 3, unique: 3, broken: 1 };

describe('stats', () => {
  it('Debería ser una función', () => {
    expect(typeof stats).toBe('function');
  });
  it('Deberia validar la ruta y darnos un objeto con el total los enlaces unicos y los broken', (done) => {
    stats(userRoute, { validate: true })
      .then((response) => {
        expect(response).toEqual(objOutput);
        done();
        // eslint-disable-next-line block-spacing
      });
  });
});
