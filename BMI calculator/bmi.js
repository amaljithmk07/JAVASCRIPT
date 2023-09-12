function Convert() {
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    let BMI = [(weight) / (height * height)] * 10000
    let cal = BMI.toFixed(2);
    if (BMI < 18.5) {
        document.getElementById("result").innerHTML = cal + " (UnderWeight)"
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById("result").innerHTML = cal + " (NormalWeight)"

    }
    else if (BMI >= 25 && BMI <= 29.9) {
        document.getElementById("result").innerHTML = cal + " (OverWeight)"

    }
    else {
        document.getElementById("result").innerHTML = cal + " (Obesity)"

    }
}