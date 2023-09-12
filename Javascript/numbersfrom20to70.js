function number() {
    let a=parseInt(document.getElementById("from").value)
    let b=parseInt(document.getElementById("to").value)

    for (let i = a; i <= b; i++) {
        if (i % 10 == 0) {
        
        }
        else {
            document.getElementById("result").innerHTML +=i +"<br>"
        }

    }
}