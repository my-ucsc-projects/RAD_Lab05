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

// ---------------------Question 03---------------------
console.log("\n\n\n-----Question 03\n")
class Book{
    constructor(name, price, author, publisher){
        this.bookName=name
        this.bookPrice = price
        this.bookAuthor = author
        this.bookPublisher = publisher
        this.discountedPrice = price
    }
}

class Novel extends Book{
    constructor(name, price, author, publisher){
        super(name, price, author, publisher)
        this.discountPresentage = 15
        this.updateDiscountPrice(this.discountPresentage)
    }

    updateDiscountPrice(discount){
        this.discountedPrice = this.bookPrice - (this.bookPrice*discount/100)
    }
    displayDetais(){
        console.log("Name:",this.bookName)
        console.log("Price:",this.discountedPrice)
        console.log("Author:",this.bookAuthor)
        console.log("Publisher:",this.bookPublisher)
    }
}
class ShortStories extends Book{
    constructor(name, price, author, publisher){
        super(name, price, author, publisher)
        this.discountPresentage = 15
        this.updateDiscountPrice(this.discountPresentage)
    }

    updateDiscountPrice(discount){
        this.discountedPrice = this.bookPrice - (this.bookPrice*discount/100)
    }
    displayDetais(){
        console.log("Name:",this.bookName)
        console.log("Price:",this.discountedPrice)
        console.log("Author:",this.bookAuthor)
        console.log("Publisher:",this.bookPublisher)
    }
}
class Biographies extends Book{
    constructor(name, price, author, publisher){
        super(name, price, author, publisher)
        this.discountPresentage = 10
        this.updateDiscountPrice(this.discountPresentage)
    }

    updateDiscountPrice(discount){
        this.discountedPrice = this.bookPrice - (this.bookPrice*discount/100)
    }
    displayDetais(){
        console.log("Name:",this.bookName)
        console.log("Price:",this.discountedPrice)
        console.log("Author:",this.bookAuthor)
        console.log("Publisher:",this.bookPublisher)
    }
}
class Educational extends Book{
    constructor(name, price, author, publisher){
        super(name, price, author, publisher)
        this.discountPresentage = 20
        this.updateDiscountPrice(this.discountPresentage)
    }

    updateDiscountPrice(discount){
        this.discountedPrice = this.bookPrice - (this.bookPrice*discount/100)
    }
    displayDetais(){
        console.log("Name:",this.bookName)
        console.log("Price:",this.discountedPrice)
        console.log("Author:",this.bookAuthor)
        console.log("Publisher:",this.bookPublisher)
    }
}

const novel01 = new Novel("Madol Doouwa",400.00,"Martin Wickramasinghe","abc")
novel01.displayDetais()
console.log("---------------------\n")
const short01 = new ShortStories("Janakatha",250,"Mahinda Kumara Dalupotha","bcd")
short01.displayDetais()
console.log("---------------------\n")
const biograpical01 = new Biographies("Senadipathi Nandamithra",300,"Prof. Bandusena Gunasekara","asd")
biograpical01.displayDetais()
console.log("---------------------\n")
const edu01 = new Educational("THE OFFICIAL CAMBRIDGE GUIDE TO IELTS", 2600,"Paulin Cullen","ghk")
edu01.displayDetais()

// ---------------------Question 04---------------------
console.log("\n\n\n-----Question 04\n")
class game{
    constructor(name,level,theme, avatar, status){
        this.playerName = name
        this.selectedLevel = level
        this.playerResult = "Not finished"
        this.gameTheme = theme
        this.playerAvatar = avatar;
        this.status = status;
    }

    setGame(name,result,level,theme, avatar, status){
        this.playerName = name
        this.selectedLevel = level
        this.playerResult = result
        this.gameTheme = theme
        this.playerAvatar = avatar;
        this.status = status;
    }
    getGame(){
        return this
    }

}

class carGame extends game{
    constructor(score,name,level,theme, avatar, status){
        super(name,level,theme, avatar, status)
        this.gameScore = score
        this.win()
    }
    setCarGame(score,name,level,theme, avatar, status,result){
        this.setGame(name,result,level,theme, avatar, status)
        this.gameScore = score
        this.win()
    }
    win(){
        if(this.gameScore==100 && this.status=="finished"){
            console.log("Winner")
        }
    }
    getCarGame(){
        return this
    }
}

class puzzleGame extends game{
    constructor(time,stime,name,level,theme, avatar, status){
        super(name,level,theme, avatar, status)
        this.gameTime = time
        this.spendTime = stime
        this.win()
    }
    setPuzzleGame(time,stime,level,theme, avatar, status,result){
        this.setGame(name,result,level,theme, avatar, status)
        this.gameTime = time
        this.spendTime = stime
        this.win()
    }
    win(){
        if(this.gameTime>=this.spendTime && this.status=="finished"){
            console.log("Winner")
        }
        else{
            console.log("Game over")
        }
    }
    getPuzzleGame(){
        return this
    }
}

class shootingGame extends game{
    constructor(completeLevel,mission,name,level,theme, avatar, status){
        super(name,level,theme, avatar, status)
        this.gameCompletePrecentage = completeLevel
        this.mission = mission
        this.win()
    }
    setShootingGame(completeLevel,mission,level,theme, avatar, status,result){
        this.setGame(name,result,level,theme, avatar, status)
        this.gameCompletePrecentage = completeLevel
        this.mission = mission
        this.win()
    }
    win(){
        if(this.completeLevel==100 && this.status=="finished"){
            console.log("Winner")
        }
        else{
            console.log("Game over")
        }
    }
    getShootingGame(){
        return this
    }
}

const game01 = new carGame(70,"Ravindu","beginner","theme01","avatar01","finished")
console.log(game01.getCarGame())
const game02 = new puzzleGame(100,70,"kavindu","beginner","theme02","avatar04","finished")
console.log(game01.getCarGame())
const game03 = new shootingGame(70,"mission01","Ravindu","beginner","theme01","avatar01","finished")
console.log(game01.getCarGame())