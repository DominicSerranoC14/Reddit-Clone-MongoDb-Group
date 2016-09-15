const express = require('express');
const app = express();
const connect = require('./database');
const router = require('./routes')

app.set('view engine', 'pug');

app.use(router)

connect()
    .then(() => {
        app.listen(3000, () => {
            console.log('Listening on PORT 3000')
        })
    })