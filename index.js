'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	return res.send('Por qué debo poner hola mundo?');
});

let port = 3000;
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});