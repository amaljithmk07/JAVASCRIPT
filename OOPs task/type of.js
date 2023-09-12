class type {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sh() {
        document.write(typeof this.name)
        document.write("<br>")
        document.write(typeof this.age)
        document.write("<br>")
    }
}
ob = new type("a",10)
ob.sh()