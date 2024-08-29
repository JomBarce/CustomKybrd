function gotoLinks(url){
    var win = window.open(url, '_blank');
}

function gotoPage(url){
    window.location = url;
}

function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if ( email == "custom@email.com" && password == "123456789"){
        window.location = "index.html";
        return false;
    }else{
        alert ("Wrong Credentials");
    }
}

function login(){
    alert ("Email: custom@email.com\nPassword: 123456789");
}

function register(){
    window.location = "login.html";
}

function cart(){
    alert ("Items bought successfully");
}