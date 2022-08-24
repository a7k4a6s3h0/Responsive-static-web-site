var Emailerror = document.getElementById('error');
var Passworderror = document.getElementById('error2');
var buttonerror = document.getElementById('error3');

function ValidateEmail(){
    var email = document.getElementById('inputEmail3').value;
    
    if(email.length==0){
        Emailerror.innerHTML='Email requrid';
        return false;
    }


    if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        Emailerror.innerHTML = 'Invalid email';
        return false
    }

    Emailerror.innerHTML ="";
    return true;
}


function Validatepassword(){
    var pass=document.getElementById('inputPassword3').value;
    
    if(pass.length==0){
      Passworderror.innerHTML='Pasword please';
      return false;
    }



    if(pass.length>8){
        Passworderror.innerHTML='password must contain 8 charater';
        return false;
    }

    Passworderror.innerHTML="";
    return true;


}

function Validatebutton(){
    if( !ValidateEmail()|| ! Validatepassword() ){
        buttonerror.style.direction = 'block';
        buttonerror.innerHTML = 'Please Fix the errors to submit'
        setTimeout(function(){ buttonerror.style.display = 'none ';} , 3000)
        return false;
    }
}