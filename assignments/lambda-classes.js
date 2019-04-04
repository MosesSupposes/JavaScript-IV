class Person {
    constructor(traits) {
        this.name = traits.name
        this.age = traits.age
        this.location = traits.location
        this.gender = traits.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
        return this
    }
}

class Instructor extends Person {
    constructor(traits) {
        super(traits)
        this.specialty = traits.specialty
        this.favLanguage = traits.favLanguage
        this.catchPhrase = traits.catchPhrase
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
        return this
    }

    grade(student, subject) {
        console.log(` ${student.name} receives a perfect score on ${subject}`)
        return this
    }

    adjustStudentGrade(student) {
        switch(determineAddOrSubtract()) {
            case 'add': 
                student.grade += genRandNum(1, 100 - student.grade)
                break
            case 'subtract': 
                student.grade -= genRandNum(1, 100 - student.grade)
                break
        }
        return this
    }
}

class Student extends Person {
    constructor(traits) {
        super(traits) 
        this.previousBackground = traits.previousBackground
        this.className = traits.className
        this.favSubjects = traits.favSubjects
        this.grade = traits.grade
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => { 
            console.log(subject)
            return this
        })
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
        return this
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
        return this
    }

    graduate() {
        if (this.grade > 70) this.readyForGraduation = true
        else this.readyForGraduation = false
        return this
    }
}

class ProjectManager extends Instructor {
    constructor(traits) {
        super(traits)
        this.gradClassName = traits.gradClassName
        this.favInstructor = traits.favInstructor
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
        return this
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

function genRandNum(min, max) {
    return Math.random() * (max - min) + min
}

function determineAddOrSubtract() {
    return (genRandNum(1, 10) >= 5) ? 'add' : 'subtract'
}