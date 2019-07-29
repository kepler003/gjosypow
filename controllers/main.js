


const express = require('express');
const router = express.Router();



//________________________________________________________ Profile

router.use('/', (req, res) => {

  res.render('main');

});



//________________________________________________________ Export router



module.exports = router;