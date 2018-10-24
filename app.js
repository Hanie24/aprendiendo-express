const express = require ('express');
const path = require('path');
const app = express ();

const routes = require ('./routes/index');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} ${req.method}`);
    next();
});

// routes

app.use(routes);

// static files

app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});