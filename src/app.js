const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const posts = require('./posts/router');

const app = express();

// App config
const PORT = process.env.PORT || 8000;
const STATIC = path.join(__dirname, 'src/static');

// App middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(STATIC));
app.use(morgan('dev'));

app.use('/api/posts', posts);

// App error handler
app.use((error, req, res) => {
  res.json({ error });
});

app.listen(PORT, () =>
  console.log(`App listening on http://localhost:${PORT}`)
);
