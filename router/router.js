const express = require('express'); 
const router = express.Router(); 

const mathsBooks = require('../json/Maths'); 
const scienceBooks = require('../json/Science'); 

router.get('/', (req,res) => {
  res.render('index', { mathsBooks: mathsBooks, scienceBooks: scienceBooks }); 
}); 

module.exports = router; 