// VALIDAR LOS LINKS I=HREF, TEXT, FILE O=HREF,TEXT,FILE,STATUS,STATUSTEXT

const fetch = require('node-fetch');
const routes = require('./link.js');

const validateLinks = (userRoute) => {
  const arrLinks = routes.extractLinks(userRoute);
  const arrPromises = arrLinks.map((element) => fetch(element.href)
  .then((res) => {
    if (res.status >= 200 && res.status < 400) {
      return {
        ...element,
        status: res.status,
        statusText: res.statusText,
      };
    }
    return {
      ...element,
      status: res.status,
      statusText: 'FAIL',
    };
  })
  .catch(() => ({
    ...element,
    status: 'ERROR',
    statusText: 'FAIL',
  })));

  return Promise.all(arrPromises);
};
 validateLinks('test/fileTest/README.md').then((res) => console.log(res));
