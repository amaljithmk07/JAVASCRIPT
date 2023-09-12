function greater() {
    let a = parseInt(prompt("enter 1st number"))
    let b = parseInt(prompt("enter 2nd number"))
    let c = parseInt(prompt("enter 3rd number"))
    let d = parseInt(prompt("enter 4th number"))
    if (a > b && a > c && a > d) {
        document.write("The greater number is :" + a)
    }
    else if (b > c && b > a && b > d) {
        document.write("The greater number is :" + b)

    }
    else if (c > b && c > a && c > d) {
        document.write("The greater number is :" + c)

    }
    else {
        document.write("The greater number is :" + d)

    }


}
greater()