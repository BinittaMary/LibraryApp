const express = require('express');

const session = require('express-session');

const nav = [
  {
    link :'/books',name :'Books', previlage : 'BOTH'
  },
  {
    link :'/authors',name :'Authors', previlage : 'BOTH'
  },  
  // {
  //   link :'/login',name :'Login', previlage : 'BOTH'
  // },  
  // {
  //   link :'/signup',name :'Sign Up', previlage : 'BOTH'
  // },
  {
    link :'/admin',name :'Add Book', previlage : 'ADMIN'
  },  
  {
    link :'/admin/addauthor',name :'Add Author', previlage : 'ADMIN'
  }
  ];

  let  bFirstTime= true;

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

  let signup =  
  {
    signupError : false,
    signupErrMessage : ''
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
    password : '1234',
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


let loginUser = {
  emailaddress  : '',
  password      : '',
  firstname     : '',
  lastname      : '',
  phoneno       : '',
  adminrole     : 'USER'
};

let loggedIn  = false;

let adminlogged =false;

let sess;

const booksRouter = require('./src/routes/bookRoutes')(nav, loginUser);

const authorsRouter = require('./src/routes/authorRoutes')(nav, loginUser);

const loginRouter = require('./src/routes/loginRoutes')(nav, users, login, newbooks, loginUser);

const adminRouter = require('./src/routes/adminRoutes')(nav, books, newbooks, loginUser);


const signupRouter = require('./src/routes/signupRoutes')(nav, users, signup, loginUser);

const Userdata = require('./src/modal/UserData');


const app = new express();

const port = process.env.PORT || 5000;



app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({extended : true}));
app.use(express.static('./public'));
app.use(session({secret: 'key'}));
//*** router for book */
app.use('/books',booksRouter);
//*** router for authors */
app.use('/authors',authorsRouter);
//*** router for login */
app.use('/login',loginRouter);
//*** router for signup */
app.use('/signup',signupRouter);
//*** router for addbook */
app.use('/admin', adminRouter);
//*** router for express-session */
// app.use('/addauthor', addAuthorRouter);


app.get('/', function(req,res)
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

    if (bFirstTime){
      var adminuser = {
        emailaddress  : 'admin@lib.com',
        password      : 'Admin1234',
        firstname     : 'Admin',
        lastname      : '',
        phoneno       : '',
        adminrole     : 'ADMIN'
      }
      Userdata.deleteOne({'emailaddress' : adminuser.emailaddress})
      .then(function(author){
        var vUser= Userdata(adminuser);
        vUser.save();
        bFirstTime = false;
      });
    }
    res.render('index', {
      nav , 
      title : 'Library' ,
      newbooks , 
      LoggedUser,
      loggedInFlag
    });
});

app.get('/logout', function(req,res)
{
  req.session.destroy(function(err) {
    if(err) {
      return console.log(err);
         }
  }); 
  res.redirect('/');
});  





app.listen(port, ()=>
{
  console.log(`library server listening to the port ${port}`);
});
