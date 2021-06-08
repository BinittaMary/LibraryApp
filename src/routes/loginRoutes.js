const express = require('express');

const Userdata = require('../modal/UserData');
const Bookdata    = require('../modal/BookData');

const loginRouter= express.Router();
function router(nav, users, login, newbooks, loginUser)
{

  loginRouter.get('/', function(req,res)
    {
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
    
        res.render('login', {
          nav , 
          title : 'Library',
          login,
          LoggedUser,
          loggedInFlag  
        });
        login.loginError = false;
        login.loginErrMessage ='';
    });   

    loginRouter.post('/validate', function(req,res)
    {
        sess=req.session;
        var user=req.body.emailid;
        var pwd =req.body.password;
        var LoggedUser;
        var loggedInFlag; 
        var validFlag = false;
        console.log(`login attempt with user : ${user} and password : ${pwd}`);
        Userdata.find()
        .then(function(users){
        for (var i=0; i< users.length; i++)
        {
             if ((user===users[i].emailaddress) && (pwd===users[i].password)) 
            {
              validFlag= true;
              LoggedUser = users[i];     
              sess.loginuser = users[i];  
              loggedInFlag =true; 
              sess.loggedIn = true;           
             }
        };
        if (validFlag)
          {
          Bookdata.find({'newbook' : 'Y'})
          .then(function(booklist){
              res.render('index', {
                  nav , 
                  title : 'Library',
                  booklist,
                  LoggedUser,
                  loggedInFlag  
                  });
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
    });


    return loginRouter;
}

module.exports = router;