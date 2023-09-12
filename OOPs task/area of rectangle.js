class area {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    show1() {
        let a = (this.length * this.width)
        document.write(a)
    }
}
let length = parseInt(prompt("enter length of a rectangle"))
let width = parseInt(prompt("enter width of a rectngle"))
obj = new area(length, width)
obj.show1()