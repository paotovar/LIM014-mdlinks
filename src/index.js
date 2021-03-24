const path = require('path');
const fs = require('fs');

//  VALIDAR UNA RUTA ABSOLUTA
const isAbsolutePath = (userRoute) => {
  if (!path.isAbsolute(userRoute)) {
    return path.resolve(userRoute);
  }
  return userRoute;
};
// console.log(isAbsolutePath('test/testFile/subFile'));

// EL ARCHIVO EXISTE
// const isExist = (userRoute) => {
// if(!fs.existsSync(userRoute)){
// return "La ruta no existe";
// }
// return "La ruta existe";}
// console.log(isExist('test/fileTest/subFile'));

// VERIFICAR SI ES UNA ARCHIVO
const checkFile = (userRoute) => {
  const stats = fs.lstatSync(userRoute);
  // console.log(fs.lstatSync(userRoute));
  const isFile = stats.isFile();
  return isFile;
};
// console.log(checkFile('test/fileTest/subFile'));

// * VERIFICAR SI ES UN DIRECTORIO
// const checkDirectory = (userRoute) => fs.statSync(userRoute).isDirectory();
// console.log(checkDirectory('test/fileTest/'));

//  SI ES DIRECTORIO, LISTAR A TODO LOS ARCHIVOS
const showAllFiles = (userRoute) => {
  let arrFiles = [];
  if (checkFile(userRoute)) {
    arrFiles.push(userRoute);
  } else {
    const readDirectory = fs.readdirSync(userRoute);
    readDirectory.forEach((file) => {
      const pathFile = path.join(userRoute, file);
      arrFiles = arrFiles.concat(showAllFiles(pathFile));
    });
  }
  return arrFiles;
};
// console.log(showAllFiles('test/fileTest/subFile'));

// FILTRAR TODO LOS ARCHIVOS CON EXTENSIÓN .MD
const searchFileMd = (files) => path.extname(files);
const filterFileMd = (userRoute) => {
  let arrFiles = [];
  const routeFile = isAbsolutePath(userRoute);
  if (checkFile(routeFile)) {
    if (searchFileMd(routeFile) === '.md') {
      arrFiles.push(routeFile);
    }
  } else {
    const readDirectory = fs.readdirSync(userRoute);
    readDirectory.forEach((file) => {
      const pathFile = path.join(userRoute, file);
      arrFiles = arrFiles.concat(filterFileMd(pathFile));
    });
  }
  return arrFiles;
};
// console.log(filterFileMd('test/fileTest/subFile'));

