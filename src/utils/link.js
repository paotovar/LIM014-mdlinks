//  EXTRAER LINKS
// Funcion usa la lib marked para transformar el file en html, y con el renderizador
// personalizado (New Renderer) busca las propiedades especificas (href, text,file)
// input: path del file, string  / output: array objetos.

const fs = require('fs');
const marked = require('marked');
// const path = require('path');
const renderer = new marked.Renderer();

const extractLinks = (userRoute) => {
  const readMarkDown = fs.readFileSync(userRoute).toString();
  // console.log(`Esto es readmarkdown:${readMarkDown}:`)
  // console.log(readMarkDown);
  const arr = [];

  renderer.link = (href, p, text) => arr.push({
    href,
    text,
    path: userRoute,
  });
  marked(readMarkDown, { renderer });
  return arr;
};
// CONSOLE PARA PROBAR SI FUNCIONA
// console.log(extractLinks('test/fileTest/README.md'));
// console.log(extractLinks('C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/README.md'));

module.exports = {
  extractLinks,
};
