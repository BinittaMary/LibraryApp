const express = require('express');
const multer  = require('multer');
const path    = require('path');

const Userdata = require('../modal/UserData');

const signupRouter = express.Router();


function router(nav, users, signup, loginUser)
{

    signupRouter.get('/', function(req,res){
        sess = req.session; 
        var LoggedUser;
        var loggedInFlag;
        if (sess.loggedIn)
        {loggedInFlag =sess.loggedIn}
        else
           {loggedInFlag =false;}
        if (sess.loginuser)
        {
          LoggedUser = sess.loginuser;
        }
        else
        {LoggedUser = loginUser;} 
        res.render('signup', {
            nav,
            title : 'Library' ,
            signup,
            LoggedUser,
            loggedInFlag  
        }); 
        signup.signupError = false;
        signup.signupErrMessage =''; 
    });


    signupRouter.post('/adduser',function(req,res){
            var userItem = {
                emailaddress  : req.body.emailid,
                password      : req.body.password,
                firstname     : req.body.firstname,
                lastname      : req.body.lastname,
                phoneno       : req.body.Phoneno,
                adminrole     : 'USER'
            }
            // users.push(userItem);
            Userdata.find({'emailaddress' :  userItem.emailaddress})
            .then (function(users){
                    var bexist=false;
                    console.log(`fetched from db Email ID - ${userItem.emailaddress}, Password - ${userItem.password}`)
                    for(var i=0; i<users.length; i++){
                    if (users[i].emailaddress==userItem.emailaddress){
                        bexist=true;
                    }};
                    if (bexist){
                        console.log(`Email Id already exist`);
                        signup.signupError = true;
                        signup.signupErrMessage ='Email ID is already registered with us';
                        res.redirect('/signup');
                       }  
                    else{
                        var vUser= Userdata(userItem);
                        vUser.save();
                        console.log(`The registered user added is : Email ID - ${userItem.emailaddress}, Password - ${userItem.password}, firstname - ${userItem.firstname}, lastname - ${userItem.lastname},   Phone No - ${userItem.phoneno}`);
                        res.redirect('/login');
                    }
            });
        });


    return signupRouter;
}

module.exports= router;