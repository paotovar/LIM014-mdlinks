// VALIDAR LOS LINKS I=HREF, TEXT, FILE O=HREF,TEXT,FILE,STATUS,STATUSTEXT
/* eslint-disable no-param-reassign */
const fetch = require('node-fetch');

const validateLinks = (arrLinks) => {
  const arrPromises = arrLinks.map((element) => new Promise((resolve) => fetch(element.href)

    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        element.status = res.status;
        element.statusText = 'OK';
        resolve(element);
      } else {
        element.status = res.status;
        element.statusText = 'Fail';
        resolve(element);
      }
    })
    .catch(() => {
      element.status = '';
      element.statusText = 'Este link no existe';
      resolve(element);
    })));
  return Promise.all(arrPromises);
};

module.exports = {
  validateLinks,
};
// validateLinks([
//   {
//     href: 'https://nodejs.org/es/',
//     text: 'Este es el link',
//     path: 'test/fileTest/README.md',
//   },
//   {
//     href: 'https://www.laboratoriaaaaa.la/',
//     text: 'Este es el link no existe',
//     path: 'test/fileTest/README.md',
//   },
//   {
//     href: 'https://www.npmjs.com/package/123456789',
//     text: '404',
//     path: 'test/fileTest/README.md',
// }
// ]).then((res) => console.log(res));
