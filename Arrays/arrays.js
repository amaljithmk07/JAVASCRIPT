// arrays
// 1. earlier definition
// var animal = "elephant"
// var animal1 = "cat"

// using array
// var animal = ["lion", "tiger", "cat", "dog"];
// document.write(animal + "<br>");
// to access one element from an array we use index numbers started with 0.
// document.write(animal[0] + "<br>");
// document.write(animal[2] + "<br>");


// replace a value from array
// var animal = ["lion", "tiger", "cat", "dog"];
// document.write(animal + "<br>");


// animal[0] = "elephant";
// animal[4] = "cheetah";
// document.write(animal + "<br>");


// length of an array
// var x = animal.length;
// Document.write(x + "<br>");
// print all items using for loop
// for (var i = 0; i < x; i++)
//                 document.write(animal[i] + "<br>");

// add an element to an array
// var animal = ["lion", "tiger", "cat", "dog"];
// animal[5] = "elephant";
// document.write(animal);


// by using push method
// animal.push("fox", "elephant", "cheetah");
// document.write(animal);
// document.write("<br>")



// delete an array element


// using shift method----- it will delete the first element from the array
// var animal = ["lion", "tiger", "cat", "dog"];
// animal.shift();
// document.write(animal);
// document.write("<br>");


// using pop method----- it will delete the last element from the array
// var animal = ["lion", "tiger", "cat", "dog"];
// animal.pop();
// document.write(animal);
// document.write("<br>");



// using splice mthod----- it will delete the element as our wish from the array
// var animal = ["lion", "tiger", "cat", "dog", "tiger", "cow"];
// animal.splice(0, 3); 
// document.write(animal);
// document.write("<br>");

// to sort an array----- with string----- sort in ascending order
// var animal = ["lion", "tiger", "cat", "dog"];
// animal.sort();
// document.write(animal);
// document.write("<br>");


// with number
// var a = [1, 6, 8, 4];
// a.sort();
// document.write(a);
// document.write("<br>");



// add two elements in an array

// var a = [1, 6, 8, 4];
// document.write(a[1] + a[3]);

// ----------------------------------------------------------------


//strings ------------sequence of characters


// var text = "java script";
// document.write(text + "<br>")

// can access the elements from a string
// document.write(text[0] + "<br>");
// document.write(text[5] + "<br>");



// string functions
// charAt----- access elements from given indexes
// var text = "java script";
// document.write(text.charAt(2) + "<br>")

// var text = "java script";
// document.write(text.charAt(7) + "<br>")



// concat
// var text = "java script";
// var text1 = "learn";
// document.write(text1.concat(text) + "<br>"); //learn javascript

// lowercase
// var text1 = "LEARN";
// document.write(text1.toLowerCase() + "<br>");

// uppercase
// var text1 = "learn";

// document.write(text1.toUpperCase() + "<br>");


// slice
// var text = "javascript";
// document.write(text.slice(5, 11) + "<br>"); //  script 


// ----------------------------------------------------------

// MATH Object

// sqrt
// var a = 9;
// document.write(Math.sqrt(a) + "<br>");

// abs ----- is the non-negative value of an number
// var a=9;
// document.write(Math.abs(a));
// document.write("<br>");
// var a=-15;   //convert neg to  positive
// document.write(Math.abs(a)+"<br>");



// min
// document.write(Math.min(10,3,7,50)+"<br>");

// max
// document.write(Math.max(10,3,7,50)+"<br>");

// pow
// document.write(Math.pow(2,3)+"<br>");

// floor
// var a =6.9;
// document.write(Math.floor(a)+"<br>"); //same as parseint

// ceil
// var a =6.1;
// document.write(Math.ceil(a)+"<br>"); //consider 6.1 as 7

// round
// var a=5.5;
// document.write(Math.round(10,3,7,50)+"<br>");
// document.write(Math.round(a)+"<br>"); //round cheyyan ie 6

// // //random ----- gives random number between 0 and 1
// document.write(Math.random() + "<br>");

// random ----- random number between 0 and 1
// var a = Math.random();
// var rounded = Math.floor(a*10);
// document.write(rounded + "<br>");

//----------------------------------------------------------------------------------------------------------//