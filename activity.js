// ---------------------Question 01---------------------
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

