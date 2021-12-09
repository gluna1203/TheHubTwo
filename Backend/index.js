const express = require('express');
const pug = require('pug');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

const urlencodedParser = express.urlencoded({
    extended: false
});

app.set('view engine', 'pug');
app.set('views', __dirname + "/views");
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
});


app.get('/', routes.index);
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createJoke);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlencodedParser, routes.editJoke);
app.get('/delete/:id', routes.delete);
app.get('/details/:id', routes.details);

app.get('/api', routes.api);

app.listen(3001);