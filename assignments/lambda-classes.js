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
    demo(subject) {
        console.log(`Today we are learning about ${subject}!`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Students extends Person {
    constructor(data) {
        super(data);
        this.className = data.className;
        this.favSubjects = data.favSubjects;
    }
    // Methods
    listsSubjects() {
        console.log(`My Favorite Subjects Are:`)
        this.favSubjects.forEach((i) => {
            console.log(`${this.favSubjects[i]}`);  //Todo: Debug This !!!
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManagers extends Instructors {
    constructor(data) {
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.'`)
    }
}

// Instructors
const george = new Instructors({ name: 'George', location: 'The Sky', age: 42, gender: 'Male', favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Jane! Stop this crazy thing!s` });
const jane = new Instructors({ name: 'Jane', location: 'The SKy', age: 43, gender: 'Female', favLanguage: 'Python', specialty: 'Flask', catchPhrase: `Don't forget the homies` });

// Project Managers
const pebbles = new ProjectManagers({ name: 'Pebbles', location: 'Bedrock', age: 2, gender: 'Female', favLanguage: 'HTML', specialty: 'Front-end', catchPhrase: `Good`, gradClassName: 'Web15', favInstructor: 'Jane' });
const bambam = new ProjectManagers({ name: 'Bambam', location: 'Bedrock', age: 37, gender: 'Male', favLanguage: 'JavaScript', specialty: 'Front-end', catchPhrase: `Bam Bam! Bam Bam Bam!`, gradClassName: 'Web15', favInstructor: 'Jane' });
const dino = new ProjectManagers({ name: 'Dino', location: 'Bedrock', age: 7, gender: 'Male', favLanguage: 'CSS', specialty: 'Front-end', catchPhrase: `Bark! Bark! Bark! Bark!`, gradClassName: 'Web14', favInstructor: 'Jane' });

// Students
const fred = new Students({ name: 'Fred', location: 'Bedrock', age: 37, gender: 'Male', favSubjects: ['Drawing', 'Not Paying Attention', 'Flexbox'], className: 'Web17', catchPhrase: `Yabba-dabba-doo` });
const wilma = new Students({ name: 'Wilma', location: 'Bedrock', age: 35, gender: 'Female', favSubjects: ['Node.JS', 'Yarn', 'Databases'], className: 'Web17', catchPhrase: `Charge it!` });
const barney = new Students({ name: 'Barney', location: 'Bedrock', age: 37, gender: 'Male', favSubjects: ['Preprocessors', 'html', 'flexbox'], className: 'Web17', catchPhrase: `Hey Fred.` });
