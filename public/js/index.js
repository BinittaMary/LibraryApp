var globalvariable='sachine';

function navigateToPage(Result, Msg)
{
    console.log("insert navigatetopage");
    if (Result=='Success')
       {           
        document.getElementById("LoginForm").action = '/';
        return true;
       }
    else
       {
          
         document.getElementById("LoginForm").action = '/login';  
         let spanElem= document.getElementById('LoginAlertMsg');
         spanElem.innerHTML= Msg; 
         return false;  
        // alert('The user authentication failed because of '+ Msg);  
       }
}

function validateLoginData(callback)
{
    console.log("insert validateLoginForm");
    let vUserName = document.getElementById('LoginUserName').value;
    let vPwd   = document.getElementById('LoginPassword').value;
    // let spanElem= document.getElementById('LoginAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
    if ((vUserName=="") ||(vPwd=="") )
    {
        console.log("empty if"); 
        sHTML = "<div style ='color:#ed2939;  '><p>Authentication failed due to the following field(s) are empty</p> <ul>";
        if (vUserName=="")
         {
            sHTML = sHTML+"<li>Email</li>"; 
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>";  
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sHTML); 
        //  spanElem.innerHTML= sHTML; 
        msg=sHTML;
        //  return false; 
        res='Failed';
    }
    else
    {  
        if ((vUserName=="admin") && (vPwd=="12345")) 
           {
            console.log("valid case"); 
            res='Success';   
            window.globalvariable ='admin';           
           }
        else
           {
            console.log("UserName and Password is wrong"); 
            msg = "<div style ='color:#ed2939;  padding:5px; '><p>Authentication failed due to invalid user name or password </p></div >";
            res='Failed';        
           }
    } 
    return(callback(res, msg));    
}




function validateAddBookData()
{
    console.log("insert validateAddBookData");
    let vTitle = document.getElementById('AddBookTitle').value;
    let vAuthor   = document.getElementById('AddBookAuthor').value;
    let vGenre   = document.getElementById('AddBookGenre').value;    
    let vImage   = document.getElementById('AddBookImage').value;
    let spanElem= document.getElementById('AddBookAlertMsg');
    let res="";
    let sHTML="";
    let sError="";
    let msg ="";
    if ((vTitle=="") ||(vAuthor=="")||(vGenre=="")||(vImage=="") )
    {
      console.log("Form validation Failed"); 
        sError="Add Book : Mandatory Field(s) are empty. "
        sHTML = "<div style ='color:#ed2939;  '><p>Following mandatory field(s) are empty: </p> <ul>";
        if (vTitle=="")
         {
            sHTML = sHTML+"<li>Title</li>"; 
            sError += 'Title,';
         }
         if (vAuthor=="")
         {
            sHTML = sHTML+"<li>Author</li>";  
            sError += 'Author,';
         } 
         if (vGenre=="")
         {
            sHTML = sHTML+"<li>Genre</li>";  
            sError += 'Genre,';
         } 
         if (vImage=="")
         {
            sHTML = sHTML+"<li>Image</li>"; 
            sError += 'Image'; 
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sError); 
        spanElem.innerHTML= sHTML; 
        msg=sHTML;
        return false; 
    }
    else
    {  
      console.log("Form validated successfully"); 
      return true;
    }     
}
