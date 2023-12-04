// An "interface" in JavaScript (using conventions)
const SoundMaker = {
  makeSound: function () {
    throw new Error('This method should be overridden');
  },
};

// A class implementing the "interface"
class Dog {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Woof! Woof!');
  }
}

// Set up the prototype chain properly
Object.setPrototypeOf(Dog.prototype, SoundMaker);

// Check if an object adheres to the "interface"
function makeAnimalSound(animal) {
  if (SoundMaker.isPrototypeOf(animal)) {
    animal.makeSound();
  } else {
    console.error('Object does not implement the SoundMaker interface');
  }
}

const myDog = new Dog('Buddy');
makeAnimalSound(myDog); // Outputs: Woof! Woof!
