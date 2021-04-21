# Markdown Links

 La librería 'Markdown-Links'sirve para detectar los links que contiene un archivo con extensión .md, y hace cálculos estadísticos con respecto al total, unique y los links broken.
 
# 🔗Diagramas de Flujo 

![API](./src/img/api.png)
![CLI](./src/img/cli.png)

# 🔗Instalación
## 🧩 Global

npm install -g git://github.com/paotovar/LIM014-mdlinks


## 🧩 Local

npm install git://github.com/paotovar/LIM014-mdlinks

# 🔗Para usarlo
## 🧩 JAVASCRIPT API

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

## 🧩 Através de línea de comandos (CLI)
md-links <path-to-file> [options]

Instrucciones<br>
⚠️md-links < path-to-file > <br>
⚠️md-links < path-to-file > --validate <br>
⚠️md-links < path-to-file > --stats <br>
⚠️md-links < path-to-file > --stats --validate

Por ejemplo:

### 🧩 Sin options:
$ md-links ''./test/fileTest/README.md''</br>

◾️HREF: https://nodejs.org/es/ <br>
◾️TEXT: Este es el link <br>
◾PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br><br>

◾️HREF: https://www.laboratoriaaaaa.la/ <br>
◾️TEXT: Este es el link no existe <br>
◾PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br><br>

◾️HREF: https://www.npmjs.com/package/123456789 <br>
◾️TEXT: 404 <br>
◾PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br> 
 



### 🧩 --validate || --v || --V
$ md-links './test/fileTest/README.md' --validate </br>
HREF: https://nodejs.org/es/ <br>
TEXT: Este es el link <br>
PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br>
STATUS: 200 <br>
STATUSTEXT: OK <br><br>

HREF: https://www.laboratoriaaaaa.la/ <br>
TEXT: Este es el link no existe <br>
PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br>
STATUS: <br>
STATUSTEXT: Este link no existe <br><br>

HREF: https://www.npmjs.com/package/123456789 <br>
TEXT: 404 <br>
PATH: C:/Users/pc/Desktop/TERCER PROYECTO/LIM014-mdlinks/test/fileTest/README.md <br>
STATUS: 404 <br>
STATUSTEXT: Fail <br>


### 🧩 --stats || --s || --S

$ md-links './test/fileTest/README.md' --stats</br>
  ✔️  TOTAL: 3</br>
  ✔️  UNIQUE: 3</br>

### 🧩 --stats --validate || --s --v || --S --V ||--validate --stats

$ md-links ./test/fileTest/README.md --stats --validate</br>
  ✔️  TOTAL: 3</br>
  ✔️  UNIQUE: 3</br>
  ❌  BROKEN: 1</br>