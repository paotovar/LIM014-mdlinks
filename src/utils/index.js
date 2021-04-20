const fs = require('fs');
const chalk = require('chalk');
const { validateLinks } = require('./validate');
const { extractLinks } = require('./link');
const { getAbsolutePath } = require('./path');

const mdLinks = (userRoute, options) => {
  const promise = new Promise((resolve, reject) => {
    // Verificamos rutas absolutas
    const verifiedRoute = getAbsolutePath(userRoute);
    if (!fs.existsSync(verifiedRoute)) {
      reject(new Error(`${chalk.red('RUTA INVÁLIDA')}`));
    }
    if (options !== undefined) {
      if (options.validate) { resolve(validateLinks(extractLinks(verifiedRoute))); }

      if (!options.validate) { resolve(extractLinks(verifiedRoute)); }
    } else { resolve(extractLinks(verifiedRoute)); }
  });
  return promise;
};

module.exports = { mdLinks };
// (mdLinks('test/fileTest/README.md', { validate: false })).then(res => console.log(res));
// (mdLinks('test/fileTest/README.md', { validate: true })).then(res => console.log(res));
// (mdLinks('test/fileTest/README.md')).then((res) => console.log(res));
