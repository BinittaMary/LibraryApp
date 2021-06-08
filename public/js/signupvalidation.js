function validateSignUpDataX()
{
   console.log('validate sign up');
   //  let vUserName  = document.getElementById('SignUpUserName').value;
    let vPwd         = document.getElementById('SignUpPassword').value;
    let vEmailId     = document.getElementById('SignUpEmailId').value;
    let vPhoneNo     = document.getElementById('Phoneno').value;
    let vfirstname   = document.getElementById('SignUpFirstName').value;
    let vlastname    = document.getElementById('SignUpLastName').value;
   //  let spanElem     = document.getElementById('SignUpAlertMsg');
    let res="";
    let sHTML="";
    let msg ="";
    console.log(`pwd : ${vPwd}, Email Id : ${vEmailId}, phone no : ${vPhoneNo}, first name : ${vfirstname}, last name : ${vlastname}`);
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