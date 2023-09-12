function readlimit() {

    let a = parseInt(document.getElementById("limit1").value)
    let b = parseInt(document.getElementById("limit2").value)
    for (let i = a; i < b; i++) {
        if (i % 2 == 1) {
            // document.write(i)
            // document.write("<br>")
            document.getElementById("res").innerHTML += i+"<br>"
        }
        else {
        }
    }
}
