var email = document.getElementById("email");
var error = document.getElementById("error");

// to check whether the emeail is in email format 
// for that we need to create email format using regular expression
// regular expresion is set of strings or special characters
// regular expresion is start and end with format slash(/)
// ^ denotes the start of the strings
// $ denotes the end of the strings
// . and - are special characters,so it should follow backward slash
// + denotes whatever inside the brackets should occur one time and it can occur more than one time
// {2,4} denotes maximum number of characters as extension
// ? denotes its occur zero or one time
// test() check the value that are given with the regular expression.
// \w denotes A-za-z0-9
// example@gmail.com


function validate() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    // var regexp=/^([\W\.-]+)@([\w\-]+).([a-z]{2,3})([a-z]{2,3})?$/

    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "please enter valid email";
        error.style.color = "red";
        return false;
    }
}