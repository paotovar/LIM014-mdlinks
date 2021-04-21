#!/usr/bin/env node
const chalk = require('chalk');
const { optionsCli } = require('./options');

const path = process.argv[2];

const [,,, ...option] = process.argv;
const options = option.join(' ');

optionsCli(path, options)
  .then((response) => {
    console.log(response);
  })

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
