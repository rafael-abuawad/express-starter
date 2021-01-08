const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

// App constants
app.set('port', process.env.PORT || 8080);
app.set('enviroment', process.env.NODE_ENV || 'development');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('session secret', process.env.SESSION_SECRET || 'secret');
app.set('session name', process.env.SESSION_NAME || 'flipper');

// App middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    name: app.get('session name'),
    secret: app.get('session secret'),
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: app.get('enviroment') == 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(morgan(app.get('enviroment') == 'production' ? 'common' : 'dev'));

// App view engine
nunjucks.configure(app.get('view engine'), {
  autoescape: true,
  express: app,
});

// App routes
app.get('/', (req, res) => {
  res.send('Base route');
});

app.listen(app.get('port'), () =>
  console.log(`App listening on http://localhost:${app.get('port')}`)
);