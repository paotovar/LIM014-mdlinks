// VALIDAR LOS LINKS I=HREF, TEXT, FILE O=HREF,TEXT,FILE,STATUS,STATUSTEXT
/* eslint-disable no-param-reassign */
const fetch = require('node-fetch');

const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((elemento) => new Promise((resolve) => fetch(elemento.href)
    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        elemento.status = res.status;
        elemento.statusText = 'OK';
        resolve(elemento);
      } else {
        elemento.status = res.status;
        elemento.statusText = 'Fail';
        resolve(elemento);
      }
    })
    .catch(() => {
      elemento.status = '';
      elemento.statusText = 'Este link no existe';
      resolve(elemento);
    })));
  return Promise.all(arrPromises);
};

module.exports = {
  validateLinks,
};
 validateLinks([
  {
    href: 'https://nodejs.org/es/',
    text: 'Este es el link',
    path: 'test/fileTest/README.md'
  },
  {
    href: 'https://www.laboratoriaaaaa.la/',
    text: 'Este es el link no existe',
    path: 'test/fileTest/README.md'
  },
  {
    href: 'https://www.npmjs.com/package/123456789',
    text: '404',
    path: 'test/fileTest/README.md'
  }
]).then((res) => console.log(res));
