'use strict';

const express = require('express');
const app = express();
const connect = require('./database');
const router = require('./routes/voteRoute');
const session = require('express-session');
const bodyparser = require('body-parser');


const port = process.env.PORT || 3000;
app.set('port', port);


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
        app.listen(port, () => {
            console.log(`Listening on PORT ${port}`)
        })
    })
