const passport =require('passport');
const User = require('../models/user');

const LocalStrategy =require('passport-local').Strategy;

//authentication using passport 
passport.use(new LocalStrategy ({
        usernameField: 'email'
    },
    function(email,password,done){
       //find a user and establish the identity 
       User.findOne({email:email},function(err,user){
           if(err){
               console.log('Error in finding user --> Passport');
               return done(err);
           }

           if(!user || user.password != password){
               console.log('Invalid Username/Password');
               return done(null,false);
           }
           return done (null, user);
       })
    }
))   


//deserrialize the user from the key in the cookies 
passport.deserializeUser(function(id,done){
    passport.deserializeUser(function(id,done){
         if(err){
             console.log('Error in finding user -->Passport');
             return done(err);
         }

         return done(null,user);
    });
});


module.exports=passport;