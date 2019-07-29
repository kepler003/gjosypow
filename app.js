
// Require packages
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



//____________________________________________________ INITIALIZE SETTINGS

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Set template engine
app.set('view engine', 'pug');


// Set static diretory path
app.use(express.static(path.join(__dirname, 'public')));


// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//____________________________________________________ MIDDLEWARE CALLED ON EVERY ROUTE
//app.use(require('./middlewares/updateDB.js'));

//____________________________________________________ ROUTES

//app.use('/', require('./controllers/main.js'));
app.use('/', (req, res) => {
  res.send("Hello there Bartek");
});




//____________________________________________________ SERVER INITIALIZING
app.listen(3000, function(){ 
  console.log("Server started on port 3000");
});


//____________________________________________________ SOCKET SETUP