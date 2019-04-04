/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(gameConfig) {
        this.createdAt = gameConfig.createdAt
        this.name = gameConfig.name
        this.dimensions = gameConfig.dimensions
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats)
        this.healthPoints = stats.healthPoints
    }

    takeDamage() {
        return `${this.name} took damage`
    }
}
  
  
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
    constructor(attributes) {
        super(attributes)
        this.team = attributes.team
        this.weapons = attributes.weapons
        this.language = attributes.language
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }

    attack(attackType=this.basicAttack, target=null) {
        const targetIsDead = target.healthPoints <= 0 
    
        if (!target) return `${this.name} attacked with ${this[attackType].name} and missed`
        else if(targetIsDead) {
          return `Oh no, ${target.name} turned into a horse! ${this.name} is literally beating a dead horse!`
        }
        else {
          target.healthPoints -= this[attackType].power
          const confirmation = `${this.name} attacked ${target.name} with ${this[attackType].name}. Damage dealt: ${this[attackType].power}.`
          return (target.healthPoints <= 0) ? target.destroy() : confirmation
        }
      }   
}
   
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
      name: 'Bruce',
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

    class Villain extends Humanoid {
        constructor(attributes) {
            super(attributes)
            this.alliance = 'The Dark Lord'
            this.basicAttack = attributes.basicAttack || { name: 'poison', power: 1 }
            this.specialAttack = attributes.specialAttack || { name: 'poison bomb of Cersei-Lannister proportions!', power: 3 }
        }
    }
  
    function Hero(attributes) {
      Humanoid.call(this, attributes)
      this.alliance = 'The Defenders of Light'
      this.basicAttack = attributes.basicAttack || { name: 'heroic punch', power: 1 }
      this.specialAttack = attributes.specialAttack || { name: 'heroic roundhouse kick!', power: 3 }
    }
  
  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    Villain.prototype = Humanoid.prototype
    Villain.prototype.attack = attack
  
    Hero.prototype = Humanoid.prototype
    Hero.prototype.attack = attack
  
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
    
  const batman = new Hero({
    createdAt: 'March 30, 1939',
    name: 'Bruce Wayne',
    alias: 'The Dark Knight',
    dimensions: {
      height: 6,
      width: 4,
      length: 4
    },
    healthPoints: 12,
    team: 'Batman and Robin', 
    language: 'Low frequency English',
    weapons: ['Battarang', 'Muay Thai', 'Tae-Kwon-Do', 'Krav Maga', 'Smoke bomb'],
    whip: 'Batmobile'
  })
  
  const theJoker = new Villain({
    createdAt: 'March 30, 1939',
    name: 'Heath Ledger',
    alias: 'The Joker', // frfr; he was the GOAT 
    dimensions: {
      height: 5,
      width: 2,
      length: 6
    },
    healthPoints: 9,
    team: 'Chaos',
    language: 'English',
    weapons: ['grenades', 'C4', 'disappearing pencils', 'pistol', 'machine gun'],
    whip: 'school bus'
  })
  
  console.log(batman.attack('basicAttack', theJoker))
  console.log(theJoker.attack('specialAttack', batman))
  console.log(batman.attack('specialAttack', theJoker))
  console.log(theJoker.attack('basicAttack', batman))
  console.log(batman.attack('basicAttack', theJoker))
  console.log(theJoker.attack('basicAttack', batman))
  console.log(theJoker.attack('basicAttack', batman))
  console.log(batman.attack('basicAttack', theJoker))
  console.log(theJoker.attack('specialAttack', batman))
  console.log(theJoker.attack('basicAttack', batman))
  console.log(theJoker.attack('specialAttack', batman))
  console.log(theJoker.attack('basicAttack', batman))
  