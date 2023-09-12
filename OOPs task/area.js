class area {
    constructor(rad) {
        this.rad = rad
    }
    show1() {
        let a = (3.14 * (this.rad * this.rad))
        document.write(a)
    }
}
let rad = parseInt(prompt("enter radius of a circle"))
obj = new area(rad)
obj.show1()