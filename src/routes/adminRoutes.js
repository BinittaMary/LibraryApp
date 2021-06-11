const express     = require('express');
const multer      = require('multer');
const path        = require('path');
const Bookdata    = require('../modal/BookData');
const Authordata   = require('../modal/AuthorData');

const adminRouter = express.Router();



function router(nav, books, newbooks, loginUser, addalert)
{
   /*** add book page */



    adminRouter.get('/', function(req,res){
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
        res.render('addbook', {
            nav,
            title : 'Library',
            LoggedUser,
            loggedInFlag 
        });  
    });

 /*** add bage page  add action*/
    adminRouter.post('/addBook',function(req,res){
        const destn = path.join(__dirname, '../../', 'public', 'images');
        console.log(destn);
        var storage =   multer.diskStorage({
            destination: function (req, file, callback) {
              callback(null, destn);
            },
            filename: function(req, file, cb) {
              cb(null, file.originalname);
          }
          });
        var upload = multer({ storage : storage}).single('image');
        upload(req,res,function(err) {
            if(err) {
                console.log("Error uploading file.");
            }
            console.log("File is uploaded");
            var bookItem = {
                title  : req.body.title,
                author : req.body.author,
                genre  : req.body.genre,
                description : req.body.description,
                image  : req.file.filename,
                newbook : 'Y'
            }
            var book= Bookdata(bookItem);
            book.save();

            console.log(`The new book to added is : Title-  ${bookItem.title}, Author - ${bookItem.author}, Genre - ${bookItem.genre}, Image - ${bookItem.img}`);
            addalert.addedFlag = true;
            addalert.addMessage= `The book ${bookItem.title} is added!!`
            res.redirect('/books');
        });
    });

     /*** edit book page*/
    adminRouter.get('/editBook/:id', function(req,res){
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
        const id =req.params.id;
        Bookdata.findOne({'_id' : id})
        .then(function(book){
            res.render('editbook', {
                nav , 
                title : 'Library',
                book,
                LoggedUser,
                loggedInFlag   
        });
        });
 
    });

    adminRouter.post('/editBook/edit',function(req,res){
        const destn = path.join(__dirname, '../../', 'public', 'images');
        console.log(destn);
        var storage =   multer.diskStorage({
            destination: function (req, file, callback) {
              callback(null, destn);
            },
            filename: function(req, file, cb) {
              cb(null, file.originalname);
          }
          });
        var upload = multer({ storage : storage}).single('image');

        upload(req,res,function(err) {
            if(err) {
                console.log("Error uploading file.");
            }
            console.log("File is uploaded");
            console.log(req.body.title);
            if(req.file){
            var bookItem = {
                id     : req.body.id,
                title  : req.body.title,
                author : req.body.author,
                genre  : req.body.genre,
                description : req.body.description,
                image  : req.file.filename,
            }
            Bookdata.updateOne({_id : bookItem.id}, {title: bookItem.title, author: bookItem.author, genre :bookItem.genre,image : bookItem.image, description : bookItem.description})
            .then(function(book){
                console.log(`The book is updated : Title-  ${bookItem.title}, Author - ${bookItem.author}, Genre - ${bookItem.genre}, Image - ${bookItem.img}`);
                addalert.addedFlag = true;
                addalert.addMessage= `The book ${bookItem.title} is updated!!`
                res.redirect('/books');
            });
            }
            else{
              var bookItem = {
                id     : req.body.id,
                title  : req.body.title,
                author : req.body.author,
                genre  : req.body.genre,
                description : req.body.description
            }
            Bookdata.updateOne({_id : bookItem.id}, {title: bookItem.title, author: bookItem.author, genre :bookItem.genre, description : bookItem.description})
            .then(function(book){
                console.log(`The book is updated : Title-  ${bookItem.title}, Author - ${bookItem.author}, Genre - ${bookItem.genre}, Image - ${bookItem.img}`);
                addalert.addedFlag = true;
                addalert.addMessage= `The book ${bookItem.title} is updated!!`
                res.redirect('/books');
            });
            }      
        });
    });



    /*** delete page action */
    adminRouter.get('/deletebook/:id', function(req,res){
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
        const id =req.params.id;
        Bookdata.findOne({'_id' : id})
        .then(function(book){
            res.render('deletebook', {
                nav , 
                title : 'Library',
                book,
                LoggedUser,
                loggedInFlag   
        });
        });
 
    });
    /*** delete page action */
    adminRouter.post('/deletebook/delete', function(req,res){
        const id =req.body.id;
        const title =req.body.title;
        Bookdata.deleteOne({'_id' : id})
        .then(function(book){
            console.log(`The book is deleted : ID -  ${id}`);
            addalert.addedFlag = true;
            addalert.addMessage= `The book ${title} is deleted!!`
            res.redirect('/books');
        });
 
    });
    
/** add author page */
    adminRouter.get('/addAuthor', function(req,res){
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
        res.render('addAuthor', {
            nav,
            title : 'Library',
            LoggedUser,
            loggedInFlag  
        });  
    });

/** add author page - add action*/
   adminRouter.post('/addAuthor/add',function(req,res){
        const destn = path.join(__dirname, '../../', 'public', 'images');
        console.log(destn);
        var storage =   multer.diskStorage({
            destination: function (req, file, callback) {
              callback(null, destn);
            },
            filename: function(req, file, cb) {
              cb(null, file.originalname);
          }
          });
        var upload = multer({ storage : storage}).single('image');
        upload(req,res,function(err) {
            if(err) {
                console.log("Error uploading file.");
            }
            console.log("File is uploaded");
            var authorItem = {
                authorname  : req.body.name,
                nationality : req.body.nationality,
                works       : req.body.works,
                career      : req.body.career,
                image       : req.file.filename                
            }
            // authors.push(authorItem);
            var author= Authordata(authorItem);
            author.save();
            console.log(`The new author to added is : Name-  ${authorItem.name}, Nationality - ${authorItem.nationality}, Genre - ${authorItem.genre}, Quote - ${authorItem.career}, Image - ${authorItem.image}`);
            addalert.addedFlag = true;
            addalert.addMessage= `The author ${authorItem.authorname} is added!!`
            res.redirect('/authors');
        });
    });

     /*** edit author page*/
     adminRouter.get('/editauthor/:id', function(req,res){
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
        const id =req.params.id;
        Authordata.findOne({'_id' : id})
        .then(function(author){
            console.log(`The edit author to added is : Name-  ${author.authorname}, Nationality - ${author.nationality}, Genre - ${author.works}, Image - ${author.image}`);
        
            res.render('editauthor', {
                nav , 
                title : 'Library',
                author,
                LoggedUser,
                loggedInFlag   
        });
        });
 
    });

     /*** edit book page- edit action*/
    adminRouter.post('/editAuthor/edit',function(req,res){
        const destn = path.join(__dirname, '../../', 'public', 'images');
        console.log(destn);
        var storage =   multer.diskStorage({
            destination: function (req, file, callback) {
              callback(null, destn);
            },
            filename: function(req, file, cb) {
              cb(null, file.originalname);
          }
          });
        var upload = multer({ storage : storage}).single('image');
        upload(req,res,function(err) {
            if(err) {
                console.log("Error uploading file.");
            }
            console.log("File is uploaded");

            if(req.file){
            var authorItem = {
                id          : req.body.id,
                authorname  : req.body.name,
                nationality : req.body.nationality,
                works       : req.body.works,
                career      : req.body.career,
                image       : req.file.filename
            }
            
            Authordata.updateOne({_id : authorItem.id}, {authorname: authorItem.authorname, nationality: authorItem.nationality, works :authorItem.works,image : authorItem.image, career : authorItem.career})
            .then(function(author){
                console.log(`The book is updated : Title-  ${authorItem.authorname}, Author - ${authorItem.nationality}, Genre - ${authorItem.works}, Image - ${authorItem.image}`);
                addalert.addedFlag = true;
                addalert.addMessage= `The author ${authorItem.authorname} is updated!!`
                res.redirect('/authors');
            });  
            }
            else {
                var authorItem = {
                    id          : req.body.id,
                    authorname  : req.body.name,
                    nationality : req.body.nationality,
                    works       : req.body.works,
                    career      : req.body.career,
                }
                
                Authordata.updateOne({_id : authorItem.id}, {authorname: authorItem.authorname, nationality: authorItem.nationality, works :authorItem.works, career : authorItem.career})
                .then(function(author){
                    console.log(`The book is updated : Title-  ${authorItem.authorname}, Author - ${authorItem.nationality}, Genre - ${authorItem.works}`);
                    addalert.addedFlag = true;
                    addalert.addMessage= `The author ${authorItem.authorname} is updated!!`
                    res.redirect('/authors');
                });  
            } 
        });     
    });


    /*** delete page action */
    adminRouter.get('/deleteAuthor/:id', function(req,res){
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
        const id =req.params.id;
        Authordata.findOne({'_id' : id})
        .then(function(author){
            res.render('deleteauthor', {
                nav , 
                title : 'Library',
                author,
                LoggedUser,
                loggedInFlag   
        });
        });
 
    });
    /*** delete page action */
    adminRouter.post('/deleteAuthor/delete', function(req,res){
        const id =req.body.id;
        const authorname =req.body.authorname;
        Authordata.deleteOne({'_id' : id})
        .then(function(author){
            console.log(`The Author is deleted : ID -  ${id}`);
            addalert.addedFlag = true;
            addalert.addMessage= `The author ${authorname} is deleted!!`
            res.redirect('/authors');
        });
 
    });

    return adminRouter;
}

module.exports= router;