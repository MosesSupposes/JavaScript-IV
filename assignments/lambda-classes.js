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
}

class Student extends Person {
    constructor(traits) {
        super(traits) 
        this.previousBackground = traits.previousBackground
        this.className = traits.className
        this.favSubjects = traits.favSubjects
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
}