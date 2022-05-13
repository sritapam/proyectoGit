const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  });
  

const PORT= process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
server.on('error', error => {
  console.log(`Error en el servidor: ${error}`);
});
