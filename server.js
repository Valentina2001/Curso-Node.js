const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/message/network');
const router = require('./network/routes');

var app = express();
//app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);


app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación se está escuchando en http://localhost:3000');
