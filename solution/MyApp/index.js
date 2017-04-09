var express = require('express')
    , consolidate = require('consolidate')
    , path = require('path')
    , fs = require('fs');
var app = express();
var port = 3000;

app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, "/views"));
app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.disable('x-powered-by');
app.set('etag', true);
app.get('/inventors', function (request, response) {
    response.render('inventors.ejs', { title : 'Investors' , data: JSON.parse(fs.readFileSync(path.join(__dirname, "models/json/inventors.json"), 'utf8')) });
});

app.listen(port);