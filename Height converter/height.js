function Convert() {
    let feet = parseInt(document.getElementById("feet").value)
    let inches = parseInt(document.getElementById("inches").value)
    let total = feet * 30.48 + inches * 2.54;
    document.getElementById("result").innerHTML = total 
}