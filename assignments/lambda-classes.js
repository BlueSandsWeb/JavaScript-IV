class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
        this.gender = data.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructors extends Person {
    constructor(data) {
        super(data);
        this.favLanguage = data.favLanguage;
        this.specialty = data.specialty;
        this.catchPhrase = data.catchPhrase;
    }
}

class Students extends Person {
    constructor(data) {
        super(data);
    }
}

class ProjectManagers extends Instructors {
    constructor(data) {
        super(data);
    }
}

const fred = new Instructors({ name: 'Fred', location: 'Bedrock', age: 37, gender: 'male', favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Don't forget the homies` });