const path = require('path');
const fs = require('fs');

//  VALIDAR UNA RUTA ABSOLUTA
const getAbsolutePath = (userRoute) => {
  if (!path.isAbsolute(userRoute)) {
    // console.log("La ruta convertida es :")
    return path.resolve(userRoute);
  }
// console.log("La ruta absoluta es :")
  return userRoute;
};
// const getAbsolutePath1=(userRoute)=>path.isAbsolute(userRoute)===true?userRoute:path.resolve(userRoute);
// console.log(getAbsolutePath1('test/testFile/subFile/'));

// EL ARCHIVO EXISTE
const isExist = (userRoute) => {
  if (fs.existsSync(userRoute)) {
// console.log("La ruta existe")
    return true;
  }
  else{
// console.log("La ruta no existe")
    return false;
}
};
// const isExist1=(userRoute)=>fs.existsSync(userRoute)===true?true:false;

// console.log(isExist('test/fileTest/subFile/proof.js'));
// console.log(isExist('123'));

// VERIFICAR SI ES UNA ARCHIVO
const checkFile = (userRoute) => {
  const stats = fs.lstatSync(userRoute);
// console.log(fs.lstatSync(userRoute));
  const isFile = stats.isFile();
  return isFile;
};
// console.log(checkFile('test/fileTest/subFile'));
// console.log(checkFile('test/fileTest/file2.md'));

// // * VERIFICAR SI ES UN DIRECTORIO
// const checkDirectory = (userRoute) => fs.statSync(userRoute).isDirectory();
// console.log(checkDirectory('test/fileTest/'));

// //  SI ES DIRECTORIO, LISTAR A TODO LOS ARCHIVOS
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
  const routeFile = getAbsolutePath(userRoute);
  if (!isExist(routeFile)) {
    // console.log("No existe la ruta ni como directorio ni como archivo");
    return arrFiles;
  }

  if (checkFile(routeFile)) {
    if (searchFileMd(routeFile) === '.md') {
      arrFiles.push(routeFile);
    }
  } else {
    const readDirectory = fs.readdirSync(userRoute);
    readDirectory.forEach((file) => {
      const pathFile = path.join(userRoute, file);
      // console.log("El path file es:")
      // console.log(pathFile)
      arrFiles = arrFiles.concat(filterFileMd(pathFile));
      // console.log("los archivos md")
      // console.log(arrFiles)
    });
  }
  return arrFiles;
};
// console.log(filterFileMd('test/fileTest/subFile'));
// console.log(filterFileMd('test/fileTest/subFile/proof.js'));
// const prueba1=()=>{
//   try {
//     const directorios =filterFileMd("123")
//   } catch (error) {
//   }

// }
// try {
//   console.log(filterFileMd('123'));
// } catch (error) {
//   console.log("Error encontrado:",error.message);
// }

//console.log(filterFileMd('123'));