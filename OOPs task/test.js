class student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    display() {
        console.log(this.name, this.age)
    }
}
obj = new student('abc', 20)
obj.display()