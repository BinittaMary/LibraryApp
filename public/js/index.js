
function validateLoginData()
{
   
    
    let vUserName = document.getElementById('LoginEmailID').value;
    let vPwd   = document.getElementById('LoginPassword').value;
   //  let spanElem= document.getElementById('LoginAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
    if ((vUserName=="") ||(vPwd=="") )
    {
        console.log("empty if"); 
        sHTML = "<div style ='color:#ed2939;  '><p>Authentication failed due to the following field(s) are empty</p> <ul>";
        if (vUserName=="")
         { 
            document.getElementById('LoginUserNameSpan').innerHTML = "<div class='balloonError'><p>Email ID is empty</p></div>"; 
            sHTML = sHTML+"<li>Email</li>"; 
         }
         if (vUserName!="")
         { 
            document.getElementById('LoginUserNameSpan').innerHTML = ""; 
            sHTML = sHTML+"<li>Email</li>"; 
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>"; 
            document.getElementById('LoginPasswordSpan').innerHTML = "<div class='balloonError'><p>Password is empty</p></div>"; 
         } 
         if (vPwd!="")
         {
            sHTML = sHTML+"<li>Password</li>";  
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sHTML); 
      //   spanElem.innerHTML= sHTML; 
        msg=sHTML;
        return false; 
    }
    else
    {  
      console.log("valid case"); 
      return true;  
    } 
     
}

function validateLoginForm()
{   
       if ((validateLoginData() && validateEmail('LoginEmailID','LoginUserNameSpan' )&& validatePasswordStrength('LoginPassword','LoginPasswordSpan',1)) == true)
      {
           return true;  
      }
    else
      {
        return false; 
      }
}

function validateAddBookData()
{
    
    let vTitle = document.getElementById('AddBookTitle').value;
    let vAuthor   = document.getElementById('AddBookAuthor').value;
    let vGenre   = document.getElementById('AddBookGenre').value;    
    let vImage   = document.getElementById('AddBookImage').value;
   //  let spanElem= document.getElementById('AddBookAlertMsg');
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
            document.getElementById('AddBookTitleSpan').innerHTML = "<div class='balloonError'><p>Title is empty</p></div>";
            sError += 'Title,';
         }
         if (vTitle!="")
         {
            sHTML = sHTML+"<li>Title</li>"; 
            document.getElementById('AddBookTitleSpan').innerHTML = "";
         }
         if (vAuthor=="")
         {
            sHTML = sHTML+"<li>Author</li>"; 
            document.getElementById('AddBookAuthorSpan').innerHTML = "<div class='balloonError'><p>Author is empty</p></div>";
            sError += 'Author,';
         } 
         if (vAuthor!="")
         {
            sHTML = sHTML+"<li>Author</li>"; 
            document.getElementById('AddBookAuthorSpan').innerHTML = "";
         }         
         if (vGenre=="")
         {
            sHTML = sHTML+"<li>Genre</li>"; 
            document.getElementById('AddBookGenreSpan').innerHTML = "<div class='balloonError'><p>Genre is empty</p></div>";
            sError += 'Genre,';
         } 
         if (vGenre!="")
         {
            sHTML = sHTML+"<li>Genre</li>"; 
            document.getElementById('AddBookGenreSpan').innerHTML = "";
         } 
         if (vImage=="")
         {
            sHTML = sHTML+"<li>Image</li>"; 
            document.getElementById('AddBookImageSpan').innerHTML = "<div class='balloonError'><p>Image is empty</p></div>";
            sError += 'Image'; 
         } 
         if (vImage!="")
         {
            sHTML = sHTML+"<li>Image</li>"; 
            document.getElementById('AddBookImageSpan').innerHTML = "";
            sError += 'Image'; 
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sError); 
      //   spanElem.innerHTML= sHTML; 
        msg=sHTML;
        return false; 
    }
    else
    {  
      console.log("Add Book Form validated successfully"); 
      return true;
    }     
}

function validateEditBookData()
{
    
    let vTitle = document.getElementById('EditBookTitle').value;
    let vAuthor   = document.getElementById('EditBookAuthor').value;
    let vGenre   = document.getElementById('EditBookGenre').value;    
    //let vImage   = document.getElementById('EditBookImage').value;
   //  let spanElem= document.getElementById('EditBookAlertMsg');
    let res="";
    let sHTML="";
    let sError="";
    let msg ="";
    console.log(`title ${vTitle}`);
    if ((vTitle=="") ||(vAuthor=="")||(vGenre=="")||(vImage=="") )
    {
      console.log("Form validation Failed"); 
        sError="Edit Book : Mandatory Field(s) are empty. "
        sHTML = "<div style ='color:#ed2939;  '><p>Following mandatory field(s) are empty: </p> <ul>";
        if (vTitle=="")
         {
            sHTML = sHTML+"<li>Title</li>";             
            document.getElementById('EditBookTitleSpan').innerHTML = "<div class='balloonError'><p>Title is empty</p></div>";
            sError += 'Title,';
         }
         if (vTitle!="")
         {
            sHTML = sHTML+"<li>Title</li>";             
            document.getElementById('EditBookTitleSpan').innerHTML = "";
         }
         if (vAuthor=="")
         {
            sHTML = sHTML+"<li>Author</li>";  
            document.getElementById('EditBookAuthorSpan').innerHTML = "<div class='balloonError'><p>Author is empty</p></div>";
            sError += 'Author,';
         }
         if (vAuthor!="")
         {
            sHTML = sHTML+"<li>Author</li>";  
            document.getElementById('EditBookAuthorSpan').innerHTML = "";
         } 
         if (vGenre=="")
         {
            sHTML = sHTML+"<li>Genre</li>";  
            document.getElementById('EditBookGenreSpan').innerHTML = "<div class='balloonError'><p>Genre is empty</p></div>";
            sError += 'Genre,';
         } 
         if (vGenre!="")
         {
            sHTML = sHTML+"<li>Genre</li>";  
            document.getElementById('EditBookGenreSpan').innerHTML = "";
         } 
         // if (vImage=="")
         // {
         //    sHTML = sHTML+"<li>Genre</li>";  
         //    document.getElementById('EditBookImageSpan').innerHTML = "<div class='balloonError'><p>Image is empty</p></div>";
         //    sError += 'Genre,';
         // } 
         // if (vImage!="")
         // {
         //    sHTML = sHTML+"<li>Genre</li>";  
         //    document.getElementById('EditBookImageSpan').innerHTML = "";
         // } 
         sHTML= sHTML+"</ul></div>";
         console.log(sError); 
      //   spanElem.innerHTML= sHTML; 
        msg=sHTML;
        return false; 
    }
    else
    {  
      console.log("Edit Book Form validated successfully"); 
      return true;
    }     
}

function validateAddAuthorData()
{
    
    let vName          = document.getElementById('AddAuthorName').value;
    let vNationality   = document.getElementById('AddAuthorNationality').value;
    let vGenre         = document.getElementById('AddAuthorGenre').value;    
    let vImage         = document.getElementById('AddAuthorImage').value;
    let spanElem       = document.getElementById('AddAuthorAlertMsg');
    let res="";
    let sHTML="";
    let sError="";
    let msg ="";
    if ((vName=="") ||(vNationality=="")||(vGenre=="")||(vImage=="") )
    {
      console.log("Form validation Failed"); 
        sError="Add Book : Mandatory Field(s) are empty. "
        sHTML = "<div style ='color:#ed2939;  '><p>Following mandatory field(s) are empty: </p> <ul>";
        if (vName=="")
         {
            sHTML = sHTML+"<li>Name</li>"; 
            sError += 'Name,';
         }
         if (vNationality=="")
         {
            sHTML = sHTML+"<li>Nationality</li>";  
            sError += 'Nationality,';
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
      console.log("Add Author form validated successfully"); 
      return true;
    }     
}


function validateEditAuthorData()
{
    
    let vName          = document.getElementById('EditAuthorName').value;
    let vNationality   = document.getElementById('EditAuthorNationality').value;
    let vWorks         = document.getElementById('EditAuthorworks').value;    
   //  let vImage         = document.getElementById('EditAuthorImage').value;
   //  let spanElem       = document.getElementById('AddAuthorAlertMsg');
    let res="";
    let sHTML="";
    let sError="";
    let msg ="";
    if ((vName=="") ||(vNationality=="")||(vWorks=="")||(vImage=="") )
    {
      console.log("Form validation Failed"); 
        sError="Add Book : Mandatory Field(s) are empty. "
        sHTML = "<div style ='color:#ed2939;  '><p>Following mandatory field(s) are empty: </p> <ul>";
        if (vName=="")
         {
            sHTML = sHTML+"<li>Name</li>"; 
            document.getElementById('EditAuthorNameSpan').innerHTML = "<div class='balloonError'><p>Author Name is empty</p></div>";
            sError += 'Name,';
         }
         if (vName!="")
         {
            sHTML = sHTML+"<li>Name</li>"; 
            document.getElementById('EditAuthorNameSpan').innerHTML = "";
            sError += 'Name,';
         }         
         if (vNationality=="")
         {
            sHTML = sHTML+"<li>Nationality</li>"; 
            document.getElementById('EditAuthorNationalitySpan').innerHTML = "<div class='balloonError'><p>Nationality is empty</p></div>";
            sError += 'Nationality,';
         } 
         if (vNationality!="")
         {
            sHTML = sHTML+"<li>Nationality</li>"; 
            document.getElementById('EditAuthorNationalitySpan').innerHTML = "";
            sError += 'Nationality,';
         } 
         if (vWorks=="")
         {
            sHTML = sHTML+"<li>Works</li>"; 
            document.getElementById('EditAuthorWorksSpan').innerHTML = "<div class='balloonError'><p>Works is empty</p></div>"; 
            sError += 'Genre,';
         } 
         if (vWorks!="")
         {
            sHTML = sHTML+"<li>Works</li>"; 
            document.getElementById('EditAuthorWorksSpan').innerHTML = ""; 
            sError += 'Genre,';
         } 
         // if (vImage=="")
         // {
         //    sHTML = sHTML+"<li>Image</li>"; 
         //    document.getElementById('EditAuthorEditBookImageSpan').innerHTML = "<div class='balloonError'><p>Image is empty</p></div>"; 
         //    sError += 'Image'; 
         // } 
         // if (vImage!="")
         // {
         //    sHTML = sHTML+"<li>Image</li>"; 
         //    document.getElementById('EditAuthorEditBookImageSpan').innerHTML = ""; 
         //    sError += 'Image'; 
         // } 
         sHTML= sHTML+"</ul></div>";
         console.log(sError); 
      //   spanElem.innerHTML= sHTML; 
        msg=sHTML;
        return false; 
    }
    else
    {  
      console.log("Edit Author form validated successfully"); 
      return true;
    }     
}

function validateSignUpData()
{
   console.log('validate sign up');
 
   //  let vUserName  = document.getElementById('SignUpUserName').value;
    let vPwd         = document.getElementById('SignUpPassword').value;
    let vEmailId     = document.getElementById('SignUpEmailId').value;
    let vPhoneNo     = document.getElementById('phonenumber').value;
    let vfirstname   = document.getElementById('SignUpFirstName').value;
    let vlastname    = document.getElementById('SignUpLastName').value;
   //  let spanElem     = document.getElementById('SignUpAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
   //  console.log(`pwd : ${vPwd}, Email Id : ${vEmailId}, phone no : ${vPhoneNo}, first name : ${vfirstname}, last name : ${vlastname}`);
    if ((vPwd=="") ||(vEmailId=="") ||(vPhoneNo=="") || (vfirstname=="") || (vlastname==""))
    {
        console.log("empty if"); 
        sHTML = "<div style ='color:#ed2939;  '><p>Authentication failed due to the following field(s) are empty</p> <ul>";
        if (vEmailId=="")
         {
            sHTML = sHTML+"<li>Email Id</li>"; 
            document.getElementById('SignUpEmailIdSpan').innerHTML = "<div class='balloonError'><p>Email is empty</p></div>";
         }
         if (vEmailId!="")
         {
            sHTML = sHTML+"<li>Email Id</li>"; 
            document.getElementById('SignUpEmailIdSpan').innerHTML = "";
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>";  
            document.getElementById('SignUpPasswordSpan').innerHTML = "<div class='balloonError'><p>Password is empty</p></div>";
         } 
         if (vPwd!="")
         {
            sHTML = sHTML+"<li>Password</li>";  
            document.getElementById('SignUpPasswordSpan').innerHTML = "";
         }         
         if (vPhoneNo=="")
         {
            sHTML = sHTML+"<li>Phone No</li>";  
            document.getElementById('PhoneNumberSpan').innerHTML = "<div class='balloonError'><p>Phone No is empty</p></div>";
         } 
         if (vPhoneNo!="")
         {
            sHTML = sHTML+"<li>Phone No</li>";  
            document.getElementById('PhoneNumberSpan').innerHTML = "";
         }          
         if (vfirstname=="")
         {
            sHTML = sHTML+"<li>First Name</li>";  
            document.getElementById('SignUpFirstNameSpan').innerHTML = "<div class='balloonError'><p>First Name is empty</p></div>";
         } 
         if (vfirstname!="")
         {
            sHTML = sHTML+"<li>First Name</li>";  
            document.getElementById('SignUpFirstNameSpan').innerHTML = "";
         } 
         if (vlastname=="")
         {
            sHTML = sHTML+"<li>Last Name</li>";  
            document.getElementById('SignUpLastNameSpan').innerHTML = "<div class='balloonError'><p>Last Name is empty</p></div>";
         } 
         if (vlastname!="")
         {
            sHTML = sHTML+"<li>Last Name</li>";  
            document.getElementById('SignUpLastNameSpan').innerHTML = "";
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sHTML); 
      //   spanElem.innerHTML= sHTML; 
        return false; 
    }
    else
    {  
      console.log("valid case"); 
      return true;  
    } 
     
}

function validateEmail(elementId, SpanID)///passing element and span id
{
 let EmailVar = document.getElementById(elementId); 
var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(EmailVar.value.match(mailformat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="Green solid 2px";
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid Email Address!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    return false;
    }   
}


function validatePhone(elementId, SpanID)///passing element and span id
{
 let phNbrVar = document.getElementById(elementId); 
var phoneNumberFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(phNbrVar.value.match(phoneNumberFormat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="green solid 2px";
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid Phone Number!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    return false;
    }   
}


function validatePassword(elementId, SpanID)///passing element and span id
{
 let pwdVar = document.getElementById(elementId); 
var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(pwdVar.value.match(pwdFormat))
    {
    let p = document.getElementById(SpanID);
    p.innerHTML ="<span id='"+SpanID+"'>"+"</span>";
    let q= document.getElementById(elementId);
    q.style.border="green solid 2px";
    return true;
    }
else
    {
    var p = document.getElementById(SpanID);
    p.innerHTML ="<div class='balloonError'><p>Invalid password!!</p></div>";
    let q= document.getElementById(elementId);
    q.style.border="Red solid 2px";
    return false;
    }   
}

function validatePasswordStrength(elementId, SpanID, conext)///passing element and span id
{
     console.log('validate password strength');
    let strength = {
        1: 'Very Weak',
        2: 'Weak',
        3: 'Medium',
        // 4: 'Strong',
        4: 'Very Strong'
      };

      let strengthValue = {
        'caps': false,
        'length': false,
        // 'special': false,
        'numbers': false,
        'small': false
      };
      let password = document.getElementById(elementId).value; 
      if(password.length >= 8) {
        strengthValue.length = true;
      } 

      for(let index=0; index < password.length; index++) {
        let char = password.charCodeAt(index);
        if(!strengthValue.caps && char >= 65 && char <= 90) {
            strengthValue.caps = true;
        } else if(!strengthValue.numbers && char >=48 && char <= 57){
          strengthValue.numbers = true;
        } else if(!strengthValue.small && char >=97 && char <= 122){
          strengthValue.small = true;
        } else if(!strengthValue.numbers && char >=48 && char <= 57){
          strengthValue.numbers = true;
        } 
        // else if(!strengthValue.special && (char >=33 && char <= 47) || (char >=58 && char <= 64)) {
        //   strengthValue.special = true;
        // }
      }

      let strengthIndicator = 0;    
      for(let metric in strengthValue) 
        {
         if(strengthValue[metric] === true) 
          {
           strengthIndicator++;
          }
        }
    console.log("Your password: " + password + " ( " + strength[strengthIndicator] + " )");

    var p = document.getElementById(SpanID);
    let q= document.getElementById(elementId);
    if (strength[strengthIndicator]=='Very Weak')  
        {
        p.innerHTML ="<div class='balloonError'><p style='color: red'>Weak Passsword</p></div>";
        q.style.border="Red solid 2px";  
        return false; 
        }
    if (strength[strengthIndicator]=='Weak')
        {
        p.innerHTML ="<div class='balloonError'><p style='color: red'>Weak Password</p></div>";
        q.style.border="Red solid 2px";   
        return false; 
        }  
   if (strength[strengthIndicator]=='Medium') 
       {
       p.innerHTML ="<div class='balloonWarning'><p style='color: #FF7043'>Medium Strength Password</p></div>";
       q.style.border="Orange solid 2px"; 
       return false; 
       }
   if  (strength[strengthIndicator]=='Strong')
       {
       p.innerHTML ="<div class='balloonWarning'><p style='color: #FF7043'>Medium Strength Password</p></div>";
       q.style.border="orange solid 2px";  
       return false; 
       }
    if (strength[strengthIndicator]=='Very Strong')
    {
    if (conext==2)
       {
        p.innerHTML ="<div class='balloonStrong'><p style='color: Green'>Strong Password</p></div>";
        q.style.border="Green solid 2px";  
        console.log("conext :1");   
       }
    if (conext==1)
       {
        p.innerHTML ="<span id='"+SpanID+"'></span>";
        q.style.border="Green solid 2px";   
        console.log("conext :2");           
       }
    return true; 
    }
  
}


function validateSignUpForm()
{  
   console.log('validateSignUpForm');
  //  return true; 
       if ((validateSignUpData() && validateEmail('SignUpEmailId','SignUpEmailIdSpan') && validatePasswordStrength('SignUpPassword','SignUpPasswordSpan',1)   && validatePhone('phonenumber','PhoneNumberSpan' ))=== true)
      {
           return true;  
      }
    else
      {
        window.scrollTo(0, 0);  
        return false; 
      }
}