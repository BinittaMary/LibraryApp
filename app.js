const express = require('express');

const nav = [
  {
    link :'/books',name :'Books'
  },
  {
    link :'/authors',name :'Authors'
  },  
  {
    link :'/login',name :'Login'
  },  
  {
    link :'/signup',name :'Sign  Up'
  },
  {
    link :'/addbook',name :'Add Book'
  },
  ];

  let books = [
    {
        title : 'Pride and Prejudice',
        author : 'Jane Austen',
        genre :'Romance novel',
        img   :'PrideAndPrejudice.jpg'
    },
    {
        title : 'The Alchemist',
        author : 'Paulo Coelho',
        genre :'Fantasy',
        img   :'TheAlchemist.jpg'
    },
    {
        title : 'Five Point Someone',
        author : 'Chetan Bhagat',
        genre :'Fantasy',
        img   :'Five_Point_Someone-What_not_to_do_at_IIT.jpg'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav, books);

const authorsRouter = require('./src/routes/authorRoutes')(nav);

const loginRouter = require('./src/routes/loginRoutes')(nav);

const addBookRouter = require('./src/routes/addBookRoutes')(nav, books);

const app = new express();

const port = process.env.PORT || 5000;



app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({extended : true}));
app.use(express.static('./public'));
//*** router for book */
app.use('/books',booksRouter);
//*** router for authors */
app.use('/authors',authorsRouter);
//*** router for authors */
app.use('/login',loginRouter);
//*** router for authors */
app.use('/addbook',addBookRouter);

app.get('/', function(req,res)
{
    res.render('index', {
      nav , 
      title : 'Library'  
    });
});

app.get('/signup', function(req,res)
{
    res.render('signup', {
      nav , 
      title : 'Library'  
    });
});



app.listen(port, ()=>
{
  console.log(`library server listening to the port ${port}`);
});
