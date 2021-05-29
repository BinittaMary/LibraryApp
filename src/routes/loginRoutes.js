const express = require('express');

const loginRouter= express.Router();
function router(nav, users, login, newbooks)
{
    loginRouter.get('/', function(req,res)
    {
        res.render('login', {
          nav , 
          title : 'Library',
          login  
        });
        login.loginError = false;
        login.loginErrMessage ='';
    });   

    loginRouter.post('/validate', function(req,res)
    {
        var user=req.body.username;
        var pwd =req.body.password;
        var validFlag = false;
        console.log(`login attempt with user : ${user} and password : ${pwd}`);
        for (var i=0; i< users.length; i++)
        {
            if ((user===users[i].username) && (pwd===users[i].password)) 
            {
              validFlag= true;
            }
        };
        if (validFlag)
          {
            console.log(`login successful`);
            res.render('index', {
              nav , 
              title : 'Library', 
              newbooks               
            });
          }
        else 
          {
            console.log(`login failed`);
            login.loginError = true;
            login.loginErrMessage ='Authentication failed due to username and password';
            res.redirect('/login');
          }         
    });


    return loginRouter;
}

module.exports = router;