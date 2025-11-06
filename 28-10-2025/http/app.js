const http = require('http');

const PORT = 30;


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  res.end('Hola Mundo');
});


server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
