const express = require("express");
const cookiesParser =require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts =require('express-ejs-layouts');
const db =require('./config/mongoose');


app.use(express.urlencoded());
app.use(cookiesParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

// use express router
app.use('/',require('./routes'));
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function (err) {
  if (err) {
    console.log(`Error is running the server:${err}`);
  }
  console.log(`Server is running on port:${port}`);
});
