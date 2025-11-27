const express = require('express');
const router = express.Router();
const connection = require('../DB');

router.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/panel');
    } else {
        res.render('login', { alert: false });
    }
});

router.post('/login', (req, res) => {
    const { email, pass } = req.body;
    connection.query('SELECT * FROM users WHERE email = ? AND contraseña = ?', [email, pass], (error, results) => {
        if (results.length > 0) {
            req.session.loggedin = true;
            req.session.name = results[0].nombre;
            res.redirect('/panel');
        } else {
            res.render('login', { alert: true, msg: "Usuario o contraseña incorrectos" });
        }
    });
});

router.get('/panel', (req, res) => {
    if (req.session.loggedin) {
        connection.query('SELECT * FROM users', (error, results) => {
            if (error) { throw error; }
            res.render('panel', { user: req.session.name, data: results });
        });
    } else {
        res.redirect('/');
    }
});

router.post('/save', (req, res) => {
    const { nombre, email, password, permisos } = req.body;
    connection.query('INSERT INTO users SET ?', { 
        nombre: nombre, 
        email: email, 
        contraseña: password,
        permisos: permisos 
    }, (error, results) => {
        if(error){ console.log(error); }
        res.redirect('/panel');
    });
});

router.post('/update', (req, res) => {
    const { id, nombre, email, password, permisos } = req.body;
    connection.query('UPDATE users SET nombre=?, email=?, contraseña=?, permisos=? WHERE id=?', 
    [nombre, email, password, permisos, id], (error, results) => {
        if(error){ console.log(error); }
        res.redirect('/panel');
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if(error){ console.log(error); }
        res.redirect('/panel');
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = router;