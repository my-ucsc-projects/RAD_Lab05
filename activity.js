// ---------------------Question 01---------------------
// Sinario 01
console.log("-----Question 01 - Sinario 01\n")
class student{
    
    constructor(Index,Name,DOB,Address,Contact,Email){
        this.indexNo = Index
        this.studentName = Name
        this.dob = DOB
        this.address = Address
        this.contactNo = Contact
        this.email = Email
        this.group = (Index%4)+1
    }

    setStudent(Index,Name,DOB,Address,Contact,Email){
        this.indexNo = Index
        this.studentName = Name
        this.dob = DOB
        this.address = Address
        this.contactNo = Contact
        this.email = Email
        this.group = (Index%4)+1
    }

    getStudent(){
        return this
    }

    setGroup(){
        this.group = (this.indexNo%4)+1
    }

    showGroupNo(){
        return this.group
    }
}

const student01 = new student()
student01.setStudent(1,"ravindu",2000,"kalutara","0777462524","ravi@gmail.com")
console.log(student01.getStudent())
student01.setGroup()
console.log("The group No is",student01.showGroupNo())

// sinario 02
console.log("\n\n\n-----Question 01 - Sinario 02\n")
class marks{
    constructor(Index, MCQ, Essay){
        this.indexNo = Index
        this.mcqMarks = MCQ
        this.essayMarks = Essay
        // calculateTotal()
        // calculateGrade()
        // calculateResult()
    }

    calculateTotal(){
        this.totalMarks = this.mcqMarks + this.essayMarks
    }

    calculateGrade(){
        if(this.totalMarks>=75){
            this.grade = 'A'
        }
        else if(this.totalMarks>=65){
            this.grade = 'B'
        }
        else if(this.totalMarks>=55){
            this.grade = 'C'
        }
        else if(this.totalMarks>=35){
            this.grade='S'
        }
        else{
            this.grade='W'
        }
    }
    calculateResult(){
        if(this.totalMarks>=50){
            this.result = "Pass"
        }
        else{
            this.result = "Fail"
        }
    }
    setMarks(Index, MCQ, Essay){
        this.indexNo = Index
        this.mcqMarks = MCQ
        this.essayMarks = Essay
        // calculateTotal()
        // calculateGrade()
        // calculateResult()
    }
    getmarks(){
        return this
    }
    displayTotal(){
        console.log("The total is",this.totalMarks)
    }
    displayResult(){
        this.calculateResult()
        console.log("The result is",this.result)
    }
    displayGrade(){
        this.calculateGrade()
        console.log("The grade is",this.grade)
    }
}

const marks1 = new marks
marks1.setMarks(1,35,40)
console.log(marks1.getmarks())
marks1.calculateTotal()
console.log(marks1.getmarks())
marks1.displayTotal()
marks1.displayResult()
marks1.displayGrade()

// ---------------------Question 02---------------------
class shape{
    constructor(){
        this.volume = 0
        this.sArea = 0
    }
}
class cube extends shape{
    constructor(x){
        super()
        this.length = x
        this.calArea()
        this.calVolume()
    }
    calArea(){
        this.sArea = Math.pow(this.length,2)*6
    }
    calVolume(){
        this.volume = Math.pow(this.length,3)
    }
}
const cube01 = new cube(10)
console.log(cube01)

class Cuboid extends shape{
    constructor(x,y,z){
        super()
        this.length = x
        this.width = y
        this.height = z
        this.calArea()
        this.calVolume()
    }
    calArea(){
        this.sArea = (2*this.length*this.width)+(2*this.length*this.height)+(2*this.height*this.width)
    }
    calVolume(){
        this.volume = this.length*this.width*this.height
    }
}
const cuboid01 = new Cuboid(10,20,30)
console.log(cuboid01)

class cylinder extends shape{
    constructor(x,r){
        super()
        this.height = x
        this.radius = r
        this.calArea()
        this.calVolume()
    }
    calArea(){
        this.sArea = (2*Math.PI*Math.pow(this.radius,2))+(2*Math.PI*this.radius*this.height)
    }
    calVolume(){
        this.volume = Math.PI*Math.pow(this.radius,2)*this.height
    }
}
const cylinder01 = new cylinder(10,7)
console.log(cylinder01)

class sphere extends shape{
    constructor(r){
        super()
        this.radius = r
        this.calArea()
        this.calVolume()
    }
    calArea(){
        this.sArea = 4*Math.PI*Math.pow(this.radius,2)
    }
    calVolume(){
        this.volume = 4*Math.PI*Math.pow(this.radius,3)/3
    }
}
const sphere01 = new sphere(10)
console.log(sphere01)

class cone extends shape{
    constructor(x,r){
        super()
        this.height = x
        this.radius = r
        this.calArea()
        this.calVolume()
    }
    calArea(){
        this.sArea = Math.PI*this.radius*(this.radius+Math.sqrt(Math.pow(this.radius,2)+Math.pow(this.height,2)))
    }
    calVolume(){
        this.volume = Math.PI*Math.pow(this.radius,2)*this.height/3
    }
}
const cone01 = new cone(10,7)
console.log(cone01)