const chalk = require('chalk');
const { optionsCli } = require('../src/options.js');

const input = [
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

const input2 = [
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
const outputStats = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4`;
const outputStats2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4`;

const outputStatsValidate = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 3 \n${chalk.red('Broken: ')} 1`;
const outputStatsValidate2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 3 \n${chalk.red('Broken: ')} 1`;

describe('Obtener objeto para API mdlinks', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof optionsCli).toBe('function');
  });
  it('Deberia retornar {validate:true} para "stats y validate"', () => {
    expect(optionsCli('--stats', '--validate')).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:true} para "validate y stats"', () => {
    expect(optionsCli('--validate', '--stats')).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:true} para "validate y undefined"', () => {
    expect(optionsCli('--validate', undefined)).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:false} para "validate y undefine"', () => {
    expect(optionsCli(undefined, undefined)).toEqual({ validate: false });
  });
});

describe('Obtener estadisticas de un array de objetos', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof optionsCli).toBe('function');
  });
  it('Deberia retornar el total:4 y unique:4', () => {
    expect(optionsCli(input)).toBe(outputStats);
  });
  it('Deberia retornar el total:4 y unique:4', () => {
    expect(optionsCli(input2)).toBe(outputStats2);
  });
});

describe('Obtener estadisticas y validacion de un array de objetos', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof optionsCli).toBe('function');
  });
  it('Deberia retornar el total:4, unique:4 y broken:1', () => {
    expect(optionsCli(input)).toBe(outputStatsValidate);
  });
  it('Deberia retornar el total:4 y unique:3', () => {
    expect(optionsCli(input2)).toBe(outputStatsValidate2);
  });
});
