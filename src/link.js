//  EXTRAER LINKS
// Funcion usa la lib marked para transformar el file en html, y con el renderizador
// personalizado (New Renderer) busca las propiedades especificas (href, text,file)
// input: path del file, string  / output: array objetos.

const fs = require('fs');
const marked = require('marked');

const renderer = new marked.Renderer();

const extractLinks = (userRoute) => {
  const readMarkDown = fs.readFileSync(userRoute).toString();
  const arr = [];

  renderer.link = (href, path, text) => arr.push({
    href,
    text,
    path: userRoute,
  });
  marked(readMarkDown, { renderer });
  return arr;
};
// CONSOLE PARA PROBAR SI FUNCIONA
// const path = require('path');
// console.log(extractLinks('test/fileTest/file2.md'))
// const cwd = process.cwd();
// console.log(extractLinks(path.join(cwd, 'test', 'fileTest', 'file2.md')));
