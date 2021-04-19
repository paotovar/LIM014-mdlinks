// eslint-disable-next-line import/order
const path = require('path');
const chalk = require('chalk');
const { optionsCli } = require('../src/options.js');

const cwd = process.cwd();
const userRoute = path.join(cwd, 'test', 'fileTest', 'README.md');

const outputTrue = `
          HREF: ${'https://nodejs.org/es/'}
          TEXT: ${'Este es el link'}
          PATH: ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}
          ${chalk.yellow.inverse('STATUS:')} ${'200'}
          ${chalk.yellow.inverse('STATUSTEXT:')} ${'OK'}\n
          HREF: ${'https://www.laboratoriaaaaa.la/'}
          TEXT: ${'Este es el link no existe'}
          PATH: ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}
          ${chalk.yellow.inverse('STATUS:')} ${''}
          ${chalk.yellow.inverse('STATUSTEXT:')} ${'Este link no existe'}\n
          HREF: ${'https://www.npmjs.com/package/123456789'}
          TEXT: ${'404'}
          PATH: ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}
          ${chalk.yellow.inverse('STATUS:')} ${'404'}
          ${chalk.yellow.inverse('STATUSTEXT:')} ${'Fail'}\n`;

const outputfalse = `
        ◾️${chalk.green.inverse('HREF:')} ${'https://nodejs.org/es/'}
        ◾️${chalk.yellow.inverse('TEXT:')} ${'Este es el link'}
        ◾${chalk.blue.inverse('PATH:')} ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}\n
        ◾️${chalk.green.inverse('HREF:')} ${'https://www.laboratoriaaaaa.la/'}
        ◾️${chalk.yellow.inverse('TEXT:')} ${'Este es el link no existe'}
        ◾${chalk.blue.inverse('PATH:')} ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}\n
        ◾️${chalk.green.inverse('HREF:')} ${'https://www.npmjs.com/package/123456789'}
        ◾️${chalk.yellow.inverse('TEXT:')} ${'404'}
        ◾${chalk.blue.inverse('PATH:')} ${'C:\\Users\\pc\\Desktop\\TERCER PROYECTO\\LIM014-mdlinks\\test\\fileTest\\README.md'}\n`;

const outputStats = `✔️  TOTAL: ${3}\n✔️  UNIQUE: ${3}`;

const outputStatsValidate = `✔️  TOTAL: ${3}\n✔️  UNIQUE: ${3}\n❌  BROKEN: ${1}`;

describe('Funcion que valida las opciones del cli', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof optionsCli).toBe('function');
  });

  it('Deberia retornar un array de objeto con opcion validate con { validate: true }', (done) => {
    optionsCli(userRoute, '--validate')
      .then((response) => {
        // console.log(response, outputTrue);
        expect(response).toEqual(outputTrue);
        done();
      });
  });

  it('Deberia validar los stats con { validate: true }', (done) => {
    optionsCli(userRoute, '--stats')
      .then((response) => {
        expect(response).toEqual(outputStats);
        done();
      });
  });
  it('Deberia validar los stats y el validate con  { validate: true } ', (done) => {
    optionsCli(userRoute, '--stats --validate')
      .then((response) => {
        expect(response).toEqual(outputStatsValidate);
        done();
        // eslint-disable-next-line block-spacing
      });
  });
  it('Deberia devolver un objeto con un array con tres propiedades { validate: false}', (done) => {
    optionsCli(userRoute, { validate: false })
      .then((response) => {
        expect(response).toBe(outputfalse);
        done();
      });
  });
});
