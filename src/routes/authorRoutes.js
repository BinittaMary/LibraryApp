const express = require('express');

const Authordata = require('../modal/AuthorData');

const authorsRouter= express.Router();
function router(nav, loginUser)
{

    authorsRouter.get('/', function(req,res)
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
       Authordata.find()
       .then(function(authors){
        res.render('authors', {
            nav , 
            title : 'Library',
            authors,
            LoggedUser,
            loggedInFlag     
            });
    
       })

    });

    authorsRouter.get('/:id', function(req,res)
    {
        const id =req.params.id;
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
        Authordata.findOne({'_id' : id})
        .then(function(author){
            res.render('author', {
                nav , 
                title : 'Library',
                author,
                LoggedUser,
                loggedInFlag     
        })
        });

    });
    return authorsRouter;
}

module.exports = router;