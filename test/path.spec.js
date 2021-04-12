const path = require('path');
const cwd = process.cwd();

const {getAbsolutePath,checkFile,showAllFiles,filterFileMd} = require('../src/utils/path');

// CONVERTIR RUTA RELATIVA EN RUTA ABSOLUTA
const rutaRelativa = '.';
const rutaAbsoluta = 'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks';
describe('FUNCIÓN GETABSOLUTEPATH', () => {
  it('Debería ser una función', () => {
    expect(typeof getAbsolutePath).toBe('function');
  });
  it('Debería convertir ruta relativa a ruta absoluta', () => {
    expect(getAbsolutePath(rutaRelativa)).toEqual(rutaAbsoluta);
  });
  it('Debería retornar ruta absoluta ', () => {
    expect(getAbsolutePath(rutaAbsoluta)).toEqual('C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks');
  });
  })

// SI LA RUTA ES UN ARCHIVO
// const input = '';
describe('FUNCIÓN VER SOLO ARCHIVOS', () => {
  it('Debería ser una función', () => {
    expect(typeof checkFile).toBe('function');
  });
  it('Debería retornar true si es un archivo', () => {
    expect(checkFile('C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md')).toBe(true);
  });
});
describe('FUNCIÓN MOSTRAR TODO LOS ARCHIVOS', () => {
  it('Debería ser una función', () => {
    expect(typeof showAllFiles).toBe('function');
  });
  it('Debería retornar true si es un archivo', () => {
    const outputFiles = [
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\subFile\\proof.js',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\subFile\\subSubFile\\file3.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\subFile\\subSubFile\\file4.md',
    ];
    expect(showAllFiles(path.join(cwd, 'test/fileTest'))).toEqual(outputFiles);
  });
});

describe('FUNCIÓN FILTRAR TODO LOS ARCHIVOS CON EXTENSIÓN .MD', () => {
  it('Debería ser una función', () => {
    expect(typeof filterFileMd).toBe('function');
  });
  it('Debería retornar true si es un archivo con extensión .md', () => {
    const arrFilterMd = [
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\file2.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\subFile\\subSubFile\\file3.md',
      'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\subFile\\subSubFile\\file4.md',
    ];
    expect(filterFileMd('test/fileTest')).toEqual(arrFilterMd);
  });
});