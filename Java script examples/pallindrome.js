let a = prompt("Enter a number")
let temp = a;
let b = 0;
let c = 0;

while (temp > 0) {
    b = temp % 10
    c = c * 10 + b
    temp = parseInt(temp / 10)
}
if (c == a) {
    document.write("The given number is pallindrome " + c)
}
else {
    document.write("The given number is not pallindrome "  )
}