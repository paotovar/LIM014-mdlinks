const path = require('path');
const { extractLinks } = require('../src/utils/link.js');

const cwd = process.cwd();

const userRoute = path.join(cwd, 'test', 'fileTest', 'README.md');
const outputArr = [
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
describe('FUNCIÓN HREF, TEXT, PATH DE .MD', () => {
  it('Debería ser una función', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('Debería devolver un array de objetos', () => {
    expect(extractLinks(userRoute)).toEqual(outputArr);
  });
});