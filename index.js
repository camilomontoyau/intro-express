'use strict';
const express = require('express');
const app = express();
const viewDir = `${__dirname}/views`;
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/mismascotas');

app.set( 'views', viewDir );
app.set( 'view engine', 'pug');

app.get('/', (req, res) => {
	return res.render('home');
});

app.post('/', (req, res) => {
	console.log(req.body);
	return res.render('home');
});

let port = 3000;
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});