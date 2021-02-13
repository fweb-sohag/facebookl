var email = document.getElementById('email');
var emailerr = document.getElementById('emailerr');

var pass = document.getElementById('pass');
var passerr = document.getElementById('passerr');

var create = document.getElementById('create');

var fname = document.getElementById('fname');
var fnameerr = document.getElementById('fnameerr');
var lname = document.getElementById('lname');
var lnameerr = document.getElementById('lnameerr');
var email0 = document.getElementById('email0');
var email0err = document.getElementById('email0err');
var pass0 = document.getElementById('pass0');
var pass0err = document.getElementById('pass0err');

var close = document.getElementById('close');
var all = document.getElementById('all');
var create = document.getElementById('create');
var all_close = document.getElementById('all_close');

// var day =Document.getElementById('day');
// var month =Document.getElementById('month');
// var year =Document.getElementById('year');




function subm(){
    if(email.value ==""){
        email.style.border = "1px solid red";
        emailerr.innerHTML = "Pleass enter your email or phone";
        email.focus();
        return false;
    }
    if(pass.value == ""){
        pass.style.border = "1px solid red";
        passerr.innerHTML = "Pleass enter your password";
        pass.focus();
        return false;
    }
    if(pass.value.length <=5){
        pass.style.border = "1px solid red";
        passerr.innerHTML = "pleass einter 6 degit";
        pass.focus();
        return false;
    }
 
}

function errvalid(){
    if(email.value !=""){
        email.style.border ="none";
        emailerr.innerHTML = "";
    }
    if(pass.value !=""){
        pass.style.border = "none";
        passerr.innerHTML= "";
    }
 
}

function sup(){
    if(fname.value ==""){
        fname.style.border = "1px solid red";
        fnameerr.innerHTML = "Pleass enter your frist name";
        fname.focus();
        return false;
    }
    if(lname.value ==""){
        lname.style.border = "1px solid red";
        lnameerr.innerHTML = "Pleass enter your last name";
        lname.focus();
        return false;
    }
    if(email0.value == ""){
        email0.style.border = "1px solid red";
        email0.innerHTML = "Please enter your email";
        email0.focus();
        return false;
    }
    if(pass0.value ==""){
        pass0.style.border = "1px solid red";
        pass0err.innerHTML ="enter your password";
        pass0.focus();
        return false;
    }
    if(pass0.value.length <=5){
        pass0.style.border = "1px solid red";
        pass0err.innerHTML ="Please inter 6 degit";
        pass0.focus();
        return false;
    }
}

function errsup(){
    if(fname.value !=""){
        fname.style.border = "";
        fnameerr.innerHTML = "";
    }
    if(lname.value !=""){
        lname.style.border = "";
        lnameerr.innerHTML = "";
    }
    if(email0.value !=""){
        email0.style.border="";
        email0err.innerHTML =""; 
    }
    if(pass0.value !=""){
        pass0.style.border ="";
        pass0err.innerHTML = "";
    }
}


// for(year = 1971; year <=2020;year++){
//     year.innerHTML('<option>'+ year +'</option>')
// }


email.addEventListener('blur',errvalid);
pass.addEventListener('blur',errvalid);
fname.addEventListener('blur',errsup);

create.addEventListener('click',function(){
    create.style.display = "none";
    all.style.display = "none";
    close.style.display ="block"; 
 });
 all_close.addEventListener('click',function(){
     close.style.display="none";
     all.style.display ="none";
     
 });
 