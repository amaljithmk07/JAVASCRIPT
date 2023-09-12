function odd(){
    let a = parseInt(prompt("enter 1st number"))
  
    if(a%2==0){
        document.write("The number "+a ," is even number")
    }
    else {
        document.write("The number "+a ," is an odd number")

    }
}
odd()