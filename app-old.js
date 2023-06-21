const http = require('http');


http.createServer((req,res) =>{
  res.write('Hola Mundoe');
  res.end();
}).listen(3000)


console.log(`Escuchando en el Puerto`,3000)