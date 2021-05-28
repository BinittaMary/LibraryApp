const express = require('express');

const authorsRouter= express.Router();
function router(nav)
{
    var authors = [
        {
            authorname : 'Chetan Prakash Bhagat',
            nationality : 'Indian',
            works :'Five Point Someone, 2 States: The Story of My Marriage, The 3 Mistakes of My Life, Half Girlfriend',
            img   :'Chetan_Bhagat.jpg'
        },
        {
            authorname : 'Paulo Coelho',
            nationality : 'Brazilian',
            works :'The Alchemist, The Pilgrimage, Eleven Minutes, The Devil and Miss Prym',
            img   :'Coelhopaulo.jpg'
        },
        {
            authorname : 'Joanne Rowling',
            nationality : 'British',
            works :'Harry Potter series, Cormoran Strike series',
            img   :'J._K._Rowling.jpg'
        },
    ];

    authorsRouter.get('/', function(req,res)
    {
        res.render('authors', {
        nav , 
        title : 'Library',
        authors  
        });
    });

    authorsRouter.get('/:id', function(req,res)
    {
        const id =req.params.id;
        res.render('author', {
        nav , 
        title : 'Library',
        author : authors[id]  
        });
    });
    return authorsRouter;
}

module.exports = router;