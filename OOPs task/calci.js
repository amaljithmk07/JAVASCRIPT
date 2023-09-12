class calci {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
plus(){
    let p=this.a+this.b
    document.write(p+"<br>")

}
minus(){
    let p=this.a-this.b
    document.write(p+"<br>")

}
mul(){
    let p=this.a*this.b
    document.write(p+"<br>")

}
div(){
    let p=this.a/this.b
    document.write(p+"<br>")

}
}
let a=parseInt(prompt("enter your 1st number"))
let b=parseInt(prompt("enter your 2nd number"))

object=new calci(a,b)
object.plus()
object.minus()
object.mul()
object.div()

