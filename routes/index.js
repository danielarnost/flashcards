const express  = require('express');
const router   = express.Router();

//{ name: name } after creating const name, key value are the same, Es6 allows us to delete one => res.render('index', { name });
router.get ('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  }else{  
    res.redirect('/hello');
  }
});




//Sandbox
//first name | last name
// router.get('/sandbox', (req, res) => {
//   res.render('sandbox', {prompt: "First and last names", firstNames, lastNames });
// });


//hello route (user name form)
//==========================
//get route serves the form, post route handles the submitted form data
router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) {  
    res.redirect('/');
  }else{
    res.render('hello');
  }
});
router.post('/hello', (req, res) => {  
   // res.json(req.body);// *To get JSON example back from POST
  res.cookie('username', req.body.username);
 // res.cookie('rememberme', '1', { maxAge: 9000, httpOnly: true });
  res.redirect('/');
});

//goodbye button route
router.post('/goodbye', (req, res) => {   
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;