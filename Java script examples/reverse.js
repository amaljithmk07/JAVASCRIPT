function reverse() {
    let a = parseInt(prompt("enter your number"))
    let b = 0;
    let temp = a;
    let sum = 0;

    while (temp > 0) {
        b = temp % 10;
        sum = sum * 10 + b
        temp = parseInt(temp / 10)
    }
    document.write("Reversed Number is :" + sum + "<br>")

}
reverse()

//153