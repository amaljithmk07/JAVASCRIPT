var a = parseInt(prompt("enter the value of side a")); 
var b = parseInt(prompt("enter the value of side b")); 
var c = parseInt(prompt("enter the value of side c")); 
var s = (a + b + c)/2;
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
document.write("Area of the triangle whose sides are "+a +" "+ b +" "+c +" is :"+"<br>")
document.write(area);