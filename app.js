const express      = require('express');
const bodyParser   = require('body-parser');
const logger       = require("morgan");
const cookieParser = require('cookie-parser');

const app          = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('view engine', 'pug');
//because its an index file, require goes there automatically, 'index' not needed in require statement
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);
//--------old error example-
//     console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log('front-end server is running on port 3000');
});