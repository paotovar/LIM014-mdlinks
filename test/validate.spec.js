// const path = require('path');
const { validateLinks } = require('../src/utils/validate');

// const cwd = process.cwd();
const arrInput = [{
  href: 'https://nodejs.org/es/',
  text: 'Este es el link',
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
}];

const arrOutput = [{
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
  href: 'https://nodejs.org/es/',
  status: 200,
  statusText: 'OK',
  text: 'Este es el link',
}];

const arrInputLinkBroken = [{
  href: 'https://nodeeeeeeeejs.org/es/',
  text: 'Este es el link roto',
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
}];

const arrOutputBroken = [{
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
  href: 'https://nodeeeeeeeejs.org/es/',
  status: '',
  statusText: 'Este link no existe',
  text: 'Este es el link roto',
}];

const arrInputLinkFail = [{
  href: 'https://nodejs.org/es/123456789',
  text: 'Error 404',
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
}];
const arrOutputFail = [{
  file: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
  href: 'https://nodejs.org/es/123456789',
  status: 404,
  statusText: 'Fail',
  text: 'Error 404',
}];

describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Debería retornar el array de links con el estado Ok', (done) => validateLinks(arrInput)
    .then((res) => {
      expect(res).toEqual(arrOutput);
      done();
    }));
  it('Debería retornar el array de links con el estado Fail', (done) => validateLinks(arrInputLinkFail)
    .then((res) => {
      expect(res).toEqual(arrOutputFail);
      done();
    }));
  it('Debería retornar el array de links con el status y status Text de link que no existe', (done) => validateLinks(arrInputLinkBroken)
    .then((res) => {
      expect(res).toEqual(arrOutputBroken);
      done();
    }));
});