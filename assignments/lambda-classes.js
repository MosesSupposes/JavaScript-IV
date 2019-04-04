class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}