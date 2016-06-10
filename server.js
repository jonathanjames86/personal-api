var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/hobbies', mainCtrl.index);


app.get('/hobbies/:type', mainCtrl.getName);
app.put('/hobbies/:id', mainCtrl.update);
app.post('/hobbies', mainCtrl.create);
app.delete('/hobbies', mainCtrl.destroy);

var port = 3000;
app.listen(port);
