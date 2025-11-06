const express = require('express');
const PORT = 30;
const app = express();

app.get('/', (req, res) => {
  res.type('text/plain'); 
  res.send('Hola Mundo');
});


app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
