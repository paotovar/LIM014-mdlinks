const chalk = require('chalk');
const { mdLinks } = require('./utils/index');
const { stats } = require('./utils/stats');

const optionsCli = (path, options) => {
  if (options === '--validate' || options === '--v' || options === '--V') {
    return mdLinks(path, { validate: true })
      .then((data) => {
        let string = '';
        data.forEach((ele) => {
          string += `
          HREF: ${ele.href}
          TEXT: ${ele.text}
          PATH: ${ele.path}
          ${chalk.yellow.inverse('STATUS:')} ${ele.status}
          ${chalk.yellow.inverse('STATUSTEXT:')} ${ele.statusText}\n`;
        });
        return string;
      });
  }
  if (options === '--stats' || options === '--s' || options === '--S') {
    return stats(path)
      .then((data) => `✔️  TOTAL: ${data.total}\n✔️  UNIQUE: ${data.unique}`);
  }
  if (options === '--stats --validate' || options === '--s --v' || options === '--S --V' || options === '--validate --stats') {
    return stats(path)
      .then((data) => `✔️  TOTAL: ${data.total}\n✔️  UNIQUE: ${data.unique}\n❌  BROKEN: ${data.broken}`);
  }
  return mdLinks(path, { validate: false })
    .then((data) => {
      let string = '';
      data.forEach((ele) => {
        string += `
        ◾️${chalk.green.inverse('HREF:')} ${ele.href}
        ◾️${chalk.yellow.inverse('TEXT:')} ${ele.text}
        ◾${chalk.blue.inverse('PATH:')} ${ele.path}\n`;
      });
      return string;
    });
};
module.exports = { optionsCli };
(optionsCli('C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md' ,'--validate')).then(res => console.log(res));
