var item = document.getElementById("imageItem");

// using Query selector(#id_name)
var divEle = document.querySelector('#customText');

// to hide an Element
function hide() {
    item.setAttribute("hidden", "true");
}



// to show the hide elements
function reset() {
    item.removeAttribute("hidden", "true");

}


// change the conent of the div
function change() {
    divEle.innerHTML = "<p> Your Item Is Missing</p>";
}
// // mouseover
function changeImage() {
    item.removeAttribute("src","/event2/img1.jfif");
    item.setAttribute("src","/event2/img2.jfif");
}

/////// mouseout
function resetImage() {
    item.removeAttribute("src","/event2/img2.jfif");
    item.setAttribute("src", "/event2/img1.jfif");
}