const express = require('express');
const multer  = require('multer');
const path    = require('path');

const addAuthorRouter = express.Router();


function router(nav, authors)
{

    addAuthorRouter.get('/', function(req,res){
        res.render('addAuthor', {
            nav,
            title : 'Library' 
        });  
    });


    addAuthorRouter.post('/add',function(req,res){
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
                genre       : req.body.genre,
                img         : req.file.filename,
            }
            authors.push(authorItem);
            console.log(`The new book to added is : Name-  ${authorItem.name}, Nationality - ${authorItem.nationality}, Genre - ${authorItem.genre}, Image - ${authorItem.img}`);
            res.redirect('/authors');
        });
    });


    return addAuthorRouter;
}

module.exports= router;