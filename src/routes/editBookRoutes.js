const express = require('express');
const DetailsRouter = express.Router();//Creating seperate router handler
const DeleteRouter = express.Router();
const path = require('path');
const multer = require("multer");
const Bookdata    = require('../modal/BookData');
DetailsRouter.use(express.static(__dirname + 'public/images'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('./public/images/'));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

function router_update(nav) {
    //index of array attach to /books
    DetailsRouter.get('/:id', function (req, res) {
        const edit = req.params.id;
        //var edit = Bookdata.findByIdAndUpdate(id);
        Bookdata.findById({ _id: edit })//from database
            .then(function (book) {

                res.render("updatebook",
                    {
                        nav,
                        title: 'Update Book',
                        book
                    });
            })
    });

    //UPDATE A BOOK
    DetailsRouter.post('/', upload.single('image'), function (req, res) {
        //var update = Bookdata.findByIdAndUpdate(req.body.id);
        console.log('inside neenu');
        if (req.file) {
            var newBOOK = {
                title: req.body.title
                // author: req.body.author,
                // genre: req.body.genre,
                // image: req.file.filename,
                // Description: ''
            };

        }
        else {
            var newBOOK = {
                title: req.body.title
                // author: req.body.author,
                // genre: req.body.genre,
                // Description: ''
            };
        }

        //res.json(newBOOK);
        var book = Bookdata.findByIdAndUpdate(req.body.id, newBOOK);
        book.exec();
        res.redirect('/books');

    });




    return DetailsRouter;
}


// function router_delete() {
//     //Delete a BOOK
//     DeleteRouter.get('/:id', function (req, res) {
//         const id = req.params.id;
//         var del = Bookdata.findByIdAndDelete({ _id: id });//from database
//         del.exec(function (err) {
//             if (err) throw err;
//             res.redirect("/books");
//         })


//     });



//     return DeleteRouter;

// }

//tomake booksRouter accessible in other files
// module.exports = booksRouter;

module.exports = router_update;
// module.exports = router_delete();
