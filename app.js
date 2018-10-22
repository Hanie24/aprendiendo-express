var express = require ('express');
var app = express ();

app.get('/', function (req, res) {
    console.log(req.query);
    res.send(`Hola ${req.query.nombre}`);
});

app.get('/ksd', function (req, res) {
    res.send('Besitos');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});