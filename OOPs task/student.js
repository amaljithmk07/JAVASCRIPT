class student1 {
    constructor(name, roll) {
        this.name = name
        this.roll = roll
    }
    show() {
        document.write(this.name, this.roll)
        document.write("<br>")
    }
    setAge(age) {
        this.age = age
        document.write(this.age)
        document.write("<br>")

    }
    setMarks(marks){
        this.marks=marks
        document.write(this.marks)
        document.write("<br>")

    }
}
stu = new student1("Amal", 7)
stu.show()
stu.setAge(21)
stu.setMarks(83)