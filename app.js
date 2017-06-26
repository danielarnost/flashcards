const express = require('express');

const app = express();

const firstNames = [
  'daniel',
  'stephen',
  'andrew',
  'ryan',
  'julie',
  'bernie'
];
const lastNames = [
  'one',
  'two',
  'thrice',
  '4th',
  'five',
  'sanders'
];

app.set('view engine', 'pug');

app.get ('/', (req, res)=> {
  res.render ('index');
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?"});
});

//Sandbox
//first name | last name
app.get('/sandbox', (req, res) => {
  res.render('sandbox', {prompt: "First and last names", firstNames, lastNames });
});

app.listen(3000, () => {
  console.log('front-end server is running on port 3000')
});