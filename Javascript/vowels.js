function vowels(){

let a = document.getElementById("str").value
// let b = a.length;
for (let i = 0; i < a.length; i++) {
  if (a[i] == "a" || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') {
      continue;
  }
  else {
      document.getElementById("result").innerHTML+=a[i]
    }
}
}