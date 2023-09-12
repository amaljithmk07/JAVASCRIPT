
function clearDisplay() {
    document.getElementById('screen').value = " "
}
function display(screen) {
    document.getElementById('screen').value += screen
}
function equal() {
    let res = document.getElementById("screen").value
    let result = eval(res)
    document.getElementById('screen').value = result
}
function back(){
   let value= document.getElementById('screen').value
   document.getElementById('screen').value= value.substr(0,value.length  -1);
}