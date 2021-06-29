#!/usr/bin/env node
const chalk = require('chalk');
const { optionsCli } = require('./options');

// console.log('process.arg0');
// console.log(process.argv[0]);
// console.log('process.arg1');
// console.log(process.argv[1]);
// console.log('este es el process.arg[2]');
// console.log(process.argv[2]);
// console.log('este es el process.argv[3]');
// console.log(process.argv[3]);
// console.log('este es el process.argv');
// console.log(process.argv);

const path = process.argv[2];

const [,,, ...option] = process.argv;

const options = option.join(' ');

optionsCli(path, options)
  .then((response) => {
    // eslint-disable-next-line no-console
    console.log(response);
  })

  // eslint-disable-next-line no-console
  .catch(() => console.log(`
  ${chalk.bgRed('ALGO ANDA MAL 🤔 SIGUE LAS SIGUIENTES👇:\n')}
  ${chalk.yellow('===========================INSTRUCCIONES===========================')}
  ⛓ mdLinks <path-to-file>
  ⛓ mdLinks <path-to-file> [options]
      📍 mdLinks <path-to-file> --validate || --v
      📍 mdLinks <path-to-file> --stats || --s
      📍 mdLinks <path-to-file> --stats --validate || --s --v
  ${chalk.yellow('===================================================================')}
  `));
// optionsCli('test/fileTest/README.md', { validate: false })
//   .then(((response) => console.log(response)));
