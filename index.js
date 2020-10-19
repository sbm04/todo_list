// to require the express library for setting up the express server
const express = require("express");

//Path module included to give relative path to views directory
const path = require("path");

// to set the port
const port = 8000;

// to import the database
const db = require("./config/mongoose");

//to import the Schema for the todo task
const Todolist =require('./models/todolist');

// using express app
const app = express();

// to set up view engine
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'));

// using the encrypted data
app.use(express.urlencoded());

// using static files
app.use(express.static("assets"));


//to render home.ejs
app.get('/todo_list',function(res,res){
    

  Todolist.find({},function(err,todolists){
    if(err){
      console.lod('Error in fetching contacts from db');
      return;
    }
    return res.render("home", {
      title: "Todo List",
       todo_list: todolists,
    });
  });
   
    
});
//   now creating new tasks
app.post('/create-todolist',function(req,res){
 
  Todolist.create({
    description:req.body.description,
    catagory: req.body.catagory,
    due_date:req.body.due_date
  },function(err,newTodolist){
    if(err){console.log('error in creating a contact ');
      return;}
      console.log('******',newTodolist);
      return res.redirect('back');
  });

});

// deleting the task
app.get ('/delete-todolist',function(req,res){
  console.log(req.query);
   var id = req.query;

   // to check the number of tasks to be deleted
   var  count =Object.keys(id).length;
   for(let i=0;i<count;i++){
     // deleting the task from the database by using their individual i
     Todolist.findByIdAndDelete(Object.keys(id)[i],function(err){
       if(err){
          console.log("error in deleting the task from db");
          console.log(id);
       }
     });
     console.log("task-deleted");
   }
   return res.redirect('back');
   
});


// app to listen and run on the assigned port number on local host
app.listen(port, function (err) {
    if (err) {
      console.log("error in running the server");
    }
    console.log("Yup! My Express server is running on port", port);
  });
  