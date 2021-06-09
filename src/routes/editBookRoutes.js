var express =   require("express");
var multer  =   require('multer');
const path        = require('path');
const editBookRouter = express.Router();

const destn = path.join(__dirname, '../../', 'public', 'images');

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, destn);
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
  });
  var upload = multer({ storage : storage}).single('image');
  function router(nav, books, newbooks, loginUser)
{

    editBookRouter.post('/',function(req,res){
    if(req.file){
        console.log('file exist');
    }
    else{
        console.log('file not exist');
    }    
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }

        res.end("File is uploaded");
    });
});

return editBookRouter;
}

module.exports= router;