function compare() 
{
    let a = document.getElementById("str1").value
    let b = document.getElementById("str2").value
    
    if (c=(a == b)) {
         
        document.getElementById("result").innerHTML+="The strings are similar"+"<br>"
    }
    else {
        document.getElementById("result").innerHTML+="The strings are not similar"+"<br>"
    }
}