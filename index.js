'use strict';
const express = require('express');
const app = express();
const viewDir = `${__dirname}/views`;
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/mismascotas');
const bodyParser = require('body-parser');
const MascotaSchema = require('./schemas/mascota.schema');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.set( 'views', viewDir );
app.set( 'view engine', 'pug');

app.get('/', (req, res) => {
	return res.render('home');
});

app.post('/', (req, res) => {
	if(!req.body) {
	  return res.send('No encontré un body');
	}
	let schema = new MascotaSchema(req.body);
	schema.save((err, mascotaCreada)=>{
    if(err) {
      return res.send(err);
    }
		return res.render('home');
	});
});

app.get('/mascotas', (req, res) => {
	return res.render('home');
});

let port = 3000;
app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});