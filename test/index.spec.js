const path = require('path');
const { mdLinks } = require('../src/utils/index.js');

const cwd = process.cwd();

const userRoute = path.join(cwd, 'test', 'fileTest', 'README.md');

const outputTrue = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Este es el link',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.laboratoriaaaaa.la/',
    text: 'Este es el link no existe',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
    status: '',
    statusText: 'Este link no existe',
  },
  {
    href: 'https://www.npmjs.com/package/123456789',
    text: '404',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
    status: 404,
    statusText: 'Fail',
  },
];

const outputFalse = [
  {
    href: 'https://nodejs.org/es/',
    text: 'Este es el link',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
  },
  {
    href: 'https://www.laboratoriaaaaa.la/',
    text: 'Este es el link no existe',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
  },
  {
    href: 'https://www.npmjs.com/package/123456789',
    text: '404',
    path: 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
  },
];

describe('Funcion validar los Link encontrados en Archivo md', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });

  // it('Deberia retornar un array de objeto sin validar los enlaces', () => {
  //   expect(mdLinks('test/fileTest/README.md').resolves.toEqual(outputFalse));
  // });

  it('Deberia retornar un array de objeto sin validar los enlaces', (done) => {
    mdLinks(userRoute)
      .then((response) => {
        expect(response).toEqual(outputFalse);
        done();
      });
  });

  it('Deberia validar los enlaces', (done) => {
    mdLinks(userRoute, { validate: true })
      .then((response) => {
        expect(response).toEqual(outputTrue);
        done();
      });
  });
  it('Deberia no validar los enlaces', (done) => {
    mdLinks(userRoute, { validate: false })
      .then((response) => {
        expect(response).toEqual(outputFalse);
        done();
        // eslint-disable-next-line block-spacing
      });
  });
});
