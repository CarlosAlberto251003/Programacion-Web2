const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,             
    saveUninitialized: false   
}));

app.use('/', require('./routes/pages'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});