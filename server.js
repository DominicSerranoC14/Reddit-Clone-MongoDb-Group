'use strict';

const express = require('express');
const app = express();
const connect = require('./database');
const router = require('./routes/routes');
const session = require('express-session');
const bodyparser = require('body-parser');


app.set('view engine', 'pug');

/////////////////////////////////////////
//Middlewares
app.use(session({
  secret: 'username',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyparser.urlencoded({extended: false}));
/////////////////////////////////////////

app.use(router);

connect()
    .then(() => {
        app.listen(3000, () => {
            console.log('Listening on PORT 3000')
        })
    })
