const express = require('express');
const multer  = require('multer');
const path    = require('path');

const addBookRouter = express.Router();


function router(nav, books)
{

    addBookRouter.get('/', function(req,res){
        res.render('addbook', {
            nav,
            title : 'Library' 
        });  
    });


    addBookRouter.post('/add',function(req,res){
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
                img    : req.file.filename,
            }
            books.push(bookItem);
            console.log(`The new book to added is : Title-  ${bookItem.title}, Author - ${bookItem.author}, Genre - ${bookItem.genre}, Image - ${bookItem.img}`);
            res.redirect('/books');
        });
    });


    return addBookRouter;
}

module.exports= router;