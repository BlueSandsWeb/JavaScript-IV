/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(obj) {
        this.createdAt = obj.createdAt;
        this.dimensions = obj.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject{
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
        this.name = stats.name;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}
// Todo: Add take Damage and inherit destroy as prototypes

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
    constructor(char) {
        super(char);
        this.team = char.team;
        this.weapons = char.weapons.join(", ");
        this.language = char.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}

// Todo: add greet() and make inherit destroy and take Damage from CharacterStats

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',A
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

class Hero extends Humanoid{
    constructor(char){
        super(char);
        this.harm = char.harm;
    }
    attack(target){
        target.healthPoints -= this.harm;
        console.log(`${target.name} was attacked for ${this.harm} damage!!!`);
        console.log(`${target.name} now has ${target.healthPoints} HP.`);
        if (target.healthPoints <= 0) {
            console.log(`${this.name} is the winner!`);
        }
    }
}

const max = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 2,
        height: 1,
    },
    healthPoints: 20,
    name: 'Max',
    team: 'Mage Guild',
    weapons: [
        'Necronomicon',
    ],
    language: 'Common Tongue',
    harm: 3,
});



function Villain(char) {
    Humanoid.call(this, char);
    this.harm = char.harm;
}


// Subtract hp from char attacked
Villain.prototype.attack = function (target) {
    target.healthPoints -= this.harm;
    console.log(`${target.name} was attacked for ${this.harm} damage!!!`);
    console.log(`${target.name} now has ${target.healthPoints} HP.`);
    if (target.healthPoints <= 0) {
        console.log(`${this.name} is the winner!`);
    }
}

const chi = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 1,
        height: 1,
    },
    healthPoints: 10,
    name: 'ChiChi',
    team: 'Theives Guild',
    weapons: [
        'Dagger',
    ],
    language: 'Common Tongue',
    harm: 1,
});


// console.log(<hero> attacked <villain> for <damage amount>)
console.log(max.attack(chi));

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;


  // * Create two new objects, one a villain and one a hero and fight it out with methods!

