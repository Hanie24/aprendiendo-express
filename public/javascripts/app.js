var express = require ('express');
var app = express ();

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
    console.log(req.query);
    res.send(`Hola ${req.query.nombre}`);
});

app.get('/index.html', function(req, res) {
    console.log(req.query);
    res.send(`Aprendiendo express`);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});