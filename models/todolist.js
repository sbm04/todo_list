// to require the library
const mongoose = require("mongoose");

// to create the Schema for tasks to be used 
const todoSchema = new mongoose.Schema({
    description:{
         type:String,
         required:true
    },
    catagory:{
        type:String,
        required:true
   },
   due_date:{
    type:String,
    required:true
    }

});
const Todolist =mongoose.model('Todolist',todoSchema);

// to export the Schema
module.exports= Todolist;
