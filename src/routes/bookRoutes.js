const express = require('express');

const Bookdata = require('../modal/BookData');

const booksRouter= express.Router();
function router(nav, loginUser)
{

    booksRouter.get('/', function(req,res)    
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

        Bookdata.find()
        .then(function(books){
            res.render('books', {
                nav , 
                title : 'Library',
                books,
                LoggedUser,
                loggedInFlag  
                });
        });

    });

    booksRouter.get('/:id', function(req,res)
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

        Bookdata.findOne({'_id' : id})
        .then(function(book){
            res.render('book', {
                nav , 
                title : 'Library',
                book,
                LoggedUser,
                loggedInFlag   
        })
        });
    });
    return booksRouter;
}

module.exports = router;