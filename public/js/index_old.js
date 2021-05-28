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



function validateLoginData()
{
    console.log("insert validateLoginForm"); 
    let vEmail = document.getElementById('LoginEmail').value;
    let vPwd   = document.getElementById('LoginPwd').value;
    let spanElem= document.getElementById('LoginAlertMsg');
  
    if ((vEmail=="") ||(vPwd=="") )
    {
        console.log("empty if"); 
        let sHTML = "<div style ='  color:red '><p>The following field(s) are empty :</p> <ul>";
        if (vEmail=="")
         {
            sHTML = sHTML+"<li>Email</li>";  
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>";  
         } 
         sHTML= sHTML+"</ul></div>";
         console.log(sHTML);      
         spanElem.innerHTML= sHTML;
       return false;
    }
    else
    {
        console.log("valid case");   
      spanElem.innerHTML= "<span id='LoginAlertMsg'></span> ";  
      return true;
    }
}

function validateLoginForm()
{   
       if ((validateLoginData() && validateEmail('LoginEmail','LoginEmailSpan' )&& validatePasswordStrength('LoginPwd','LoginPwdSpan',1)) == true)
      {
           return true;  
      }
    else
      {
        return false; 
      }
}


function validateSignUpData()
{
    console.log("insert SignUpForm"); 
    let vEmail = document.getElementById('SignUpEmail').value;
    let vPwd   = document.getElementById('SignUpPassword').value;
    let vPhNbr = document.getElementById('phonenumber').value;
    let spanElem= document.getElementById('SignUpAlertMsg');
  
    if ((vEmail=="") ||(vPwd=="")||(vPhNbr=="") )
    {
        console.log("empty if"); 
        let sHTML = "<div style ='color:red'><p>The following field(s) are empty :</p> <ul>";
        if (vEmail=="")
         {
            sHTML = sHTML+"<li>Email</li>";  
         }
         if (vPwd=="")
         {
            sHTML = sHTML+"<li>Password</li>";  
         } 
         if (vPhNbr=="")
         {
            sHTML = sHTML+"<li>Phone Number</li>";  
         }          sHTML= sHTML+"</ul></div>";
         console.log(sHTML);      
         spanElem.innerHTML= sHTML;
       return false;
    }
    else
    {
      console.log("valid case");   
      spanElem.innerHTML= "<span id='SignUpAlertMsg'></span> ";  
      return true;
    }
}

function validateSignUpForm()
{   
       if ((validateSignUpData() && validateEmail('SignUpEmail','SignUpEmailSpan') && validatePasswordStrength('SignUpPassword','SignUpPasswordSpan',1) && validatePhone('phonenumber','PhoneNumberSpan' )) == true)
      {
           return true;  
      }
    else
      {
        window.scrollTo(0, 0);  
        return false; 
      }
}

function ValidateForgetPasswordData()
{
    console.log("insert SignUpForm"); 
    let vEmail = document.getElementById('ForgetPwdEmail').value;
    let spanElem= document.getElementById('ForgetPwdEmailMsg');
  
    if (vEmail=="") 
    {
        console.log("empty if"); 
        let sHTML = "<div style ='color:red'><p>Email field is empty.</p> ";
        spanElem.innerHTML= sHTML;
       return false;
    }
    else
    {
      console.log("valid case");   
      spanElem.innerHTML= "<span id='ForgetPwdEmailMsg'></span> ";  
      return true;
    }
}


function ValidateForgetPasswordForm()
{   
       if ((ValidateForgetPasswordData() && validateEmail('ForgetPwdEmail','ForgetPwdEmailSpan')) == true)
      {
           return true;  
      }
    else
      {
        window.scrollTo(0, 0);  
        return false; 
      }
}