class Person {
    constructor(data){
        this.name = data.name;
        this.location = data.location;
        this.age = data.age;
        this.gender = data.gender;
        this.favLanguage = data.favLanguage;
        this.specialty = data.specialty;
        this.catchPhrase = data.catchPhrase;
    }
}

class Students Extends Person{
    constructor(data) {
        super(data);
    }
}

class Instructors extends Person{
    constructor(data) {
        super(data);
    }
}

class ProjectManagers extends Instructors {
    constructor(data) {
        super(data);
    }
}

const fred = new Instructor({ name: 'Fred', location: 'Bedrock', age: 37, gender: 'male', favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Don't forget the homies` });