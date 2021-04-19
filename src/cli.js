#!/usr/bin/env node
const chalk = require('chalk');
const { optionsCli } = require('./options');

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
  ⛓ md-links <path-to-file>
  ⛓ md-links <path-to-file> [options]
      📍 md-links <path-to-file> --validate || --v
      📍 md-links <path-to-file> --stats || --s
      📍 md-links <path-to-file> --stats --validate || --s --v
  ${chalk.yellow('===================================================================')}
  `));
optionsCli('test/fileTest/README.md', { validate: false })
  // eslint-disable-next-line no-console
  .then(((response) => console.log(response)));
