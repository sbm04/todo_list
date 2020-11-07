const User =require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"Profile"
    });
} 
// render the sign up page
module.exports.signUp =function(req,res){
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    })
}
// render the sign in  page
module.exports.signIn =function(req,res){
    return res.render('user_sign_in',{
        title:"Codial | Sign in"
    })
}
//get the sign up data 
module.exports.create =function(req,res){
    //cheak there password and confirm password are equal or not  
    if(req.body.password!=req.body.confirm_password)
    {
        
        //yahan kahi error hain 
        console.log("Password didn't match");
        return res.redirect('back');
    }
    console.log('Hey I am there!!');
    // if password are same will try to find user with same email id because email has to unique
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up');return;}
        

        if(!user){
            console.log("Hey!!");
            User.create(req.body, function(err,user){
                console.log('Hey Shubham');
                if(err){console.log('error in creating user while signing up');return}


                return res.redirect('/users/sign-in');
            });
        }else{
            console.log("Something Error occur");
            return res.redirect('back');
        }
    })
}
//sign in and create a session for the user
module.exports.createSession =function(req,res){
    // TODO LATER 
}
