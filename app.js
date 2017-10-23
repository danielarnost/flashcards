const express = require('express');
const bodyParser = require('body-parser');
const logger       = require("morgan");
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get ('/', (req, res)=> {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?"});
});

//Sandbox
//first name | last name
// app.get('/sandbox', (req, res) => {
//   res.render('sandbox', {prompt: "First and last names", firstNames, lastNames });
// });
//hello route (user name form)
app.get('/hello', (req, res) => {
  res.render('hello');
});
app.post('/hello', (req, res) => {  
  // res.json(req.body); *To get JSON back from POST
res.render('hello', {name: req.body.username});
});

app.listen(3000, () => {
  console.log('front-end server is running on port 3000')
});