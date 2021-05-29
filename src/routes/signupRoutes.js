const express = require('express');
const multer  = require('multer');
const path    = require('path');

const signupRouter = express.Router();


function router(nav, users)
{

    signupRouter.get('/', function(req,res){
        res.render('signup', {
            nav,
            title : 'Library' 
        });  
    });


    signupRouter.post('/adduser',function(req,res){
            var userItem = {
                username      : req.body.name,
                password      : req.body.password,
                emailaddress  : req.body.emailid,
                phoneno       : req.body.Phoneno
            }
            users.push(userItem);
            console.log(`The new user added is : UserName-  ${userItem.username}, Password - ${userItem.password}, Email ID - ${userItem.emailaddress},  Phone No - ${userItem.phoneno}`);
            res.redirect('/login');
        });


    return signupRouter;
}

module.exports= router;