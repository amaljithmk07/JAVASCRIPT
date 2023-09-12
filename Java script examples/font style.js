
function font() {
    let a = document.getElementById("text").value
    let b = document.getElementById("functions").value
    if (b == 'upper') {
        let c = a.toUpperCase()
        document.getElementById("result").innerHTML = c
    } else if (b == 'lower') {
        let d = a.toLowerCase()
        document.getElementById("result").innerHTML = d
    } else {
        document.write("not valid")
    }
}