function cookies() {
    let a = parseInt(document.getElementById("var1").value)
    if (a <= 12) {


        for (let i = 1; i <= a; i++) {
            if (i == 1) {
                document.getElementById("result").innerHTML += " jan" + "<br>";
            }
            else if (i == 2) {
                document.getElementById("result").innerHTML += " feb" + "<br>";

            }
            else if (i == 3) {
                document.getElementById("result").innerHTML += "mar" + "<br>";

            }
            else if (i == 4) {
                document.getElementById("result").innerHTML += "apr" + "<br>";

            }
            else if (i == 5) {
                document.getElementById("result").innerHTML += " may" + "<br>";

            }
            else if (i == 6) {
                document.getElementById("result").innerHTML += "jun" + "<br>";

            }
            else if (i == 7) {
                document.getElementById("result").innerHTML += "july" + "<br>";
            }
            else if (i == 8) {
                document.getElementById("result").innerHTML += "aug" + "<br>";

            }
            else if (i == 9) {
                document.getElementById("result").innerHTML += "sep" + "<br>";
            }
            else if (i == 10) {
                document.getElementById("result").innerHTML += "oct" + "<br>";

            }
            else if (i == 11) {
                document.getElementById("result").innerHTML += "nov" + "<br>";

            }
            else if (i == 12) {
                document.getElementById("result").innerHTML += "dec" + "<br>";

            }
            else {

            }

        }
        document.getElementById("result").innerHTML += " National cookies day is December 4th" + "<br>";


    }
    else {
        document.getElementById("result").innerHTML += "Not valid" + "<br>";

    }

}
