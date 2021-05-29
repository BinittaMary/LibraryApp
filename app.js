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
    link :'/signup',name :'Sign Up'
  },
  {
    link :'/addbook',name :'Add Book'
  },  
  {
    link :'/addauthor',name :'Add Author'
  }
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
    },
    {
      title  : 'One Arranged Murder',
      author : 'Chetan Bhagat',
      genre  : 'Mystery, Thriller',
      img    : 'One_Arranged_Murder.jpg'
  },
  {
    title  : 'Fifty Shades of Grey',
    author : 'E. L. James',
    genre  : 'romance',
    img    : 'ShadesofGreyCoverArt.jpg'
}
];

let newbooks = [
  {
      title  : 'One Arranged Murder',
      author : 'Chetan Bhagat',
      genre  : 'Mystery, Thriller',
      img    : 'One_Arranged_Murder.jpg'
  },
  {
    title  : 'Fifty Shades of Grey',
    author : 'E. L. James',
    genre  : 'romance',
    img    : 'ShadesofGreyCoverArt.jpg'
}
];

let authors = [
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
  {
    authorname : 'E. L. James',
    nationality : 'England',
    works :'Fifty Shades of Grey, Fifty Shades Darker,Fifty Shades Freed,Book Club',
    img   :'E._L._James.jpg'
},
];


let login =  
  {
    loginError : false,
    loginErrMessage : ''
  };

let users =[
  {
    username : 'admin',
    password : '12345',
    emailaddress : 'admin@lib.com',
    phoneno  : 1234567890
  },
  {
    username : 'abcd',
    password : '123',
    emailaddress : 'abc@gmail.com',
    phoneno  : 1234567890
  },
  {
    username : 'binitta',
    password : '12345',
    emailaddress : 'abc@gmail.com',
    phoneno  : 1234567890
  }
];



const booksRouter = require('./src/routes/bookRoutes')(nav, books);

const authorsRouter = require('./src/routes/authorRoutes')(nav, authors);

const loginRouter = require('./src/routes/loginRoutes')(nav, users, login);

const addBookRouter = require('./src/routes/addBookRoutes')(nav, books, newbooks);

const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav, authors);

const signupRouter = require('./src/routes/signupRoutes')(nav, users);

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
//*** router for login */
app.use('/login',loginRouter);
//*** router for signup */
app.use('/signup',signupRouter);
//*** router for addbook */
app.use('/addbook', addBookRouter);
//*** router for addAuthor */
app.use('/addauthor', addAuthorRouter);

app.get('/', function(req,res)
{
    res.render('index', {
      nav , 
      title : 'Library' ,
      newbooks 
    });
});




app.listen(port, ()=>
{
  console.log(`library server listening to the port ${port}`);
});
