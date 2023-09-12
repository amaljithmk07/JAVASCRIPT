function swap() {
    let a = parseInt(prompt("Enter first number:"))
    let b = parseInt(prompt("Enter second number:"))
    document.write("before swapping a=" + a + " b=" + b ,+"<br>")

    let temp = 0
    temp = a;
    a = b;
    b = temp;
    document.write("after swapping a=" + a + "and b=" + b)


} swap()